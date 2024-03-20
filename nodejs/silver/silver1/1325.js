let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);

let heads = new Array(N).fill(true);
let graph = Array.from({length : N}, _ => new Array());
for (let m = 0; m < M; ++m) {
    let [c, p] = input[m].split(' ').map(x=> (+x) - 1);
    heads[c] = false;
    graph[p].push(c);
}

let maxes = [];
let max = 0;
for (let n = 0; n < N; ++n) {
    if(!heads[n]) continue;
    checked = new Array(N).fill(false);
    dfs(n, checked);
    checked = checked.filter(x=>x===true);
    let cnt = checked.length;
    if (cnt > max) {
        maxes = [n+1];
        max = cnt;
    } else if (cnt === max) {
        maxes.push(n+1);
    }
}
if (maxes.length === 0) maxes = Array.from({length:N}, (_, i) => i+1);
console.log(maxes.join(' '));

function dfs(n, checked) {
    checked[n] = true;
    for (x of graph[n]) {
        if (!checked[x]) dfs(x, checked);
    }
}