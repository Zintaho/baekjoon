let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let graph = Array.from({length:N+1}, _ => new Array());
for (let i = 0; i < M; ++i) {
    let [a,b] = input[i].split(' ').map(x=>+x);
    graph[a].push(b);
    graph[b].push(a);
}

let check = new Array(N+1).fill(false);
let count = 0;
for (let n = 1; n <= N; ++n) {
    count += enter(n);
}

function enter(v) {
    if (check[v] === true) return 0;

    check[v] = true;
    for (const vv of graph[v]) {
        if (check[vv] === false) {
            enter(vv);
        }
    }
    return 1;
}

console.log(count);