let [NMR, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, R] = NMR.split(' ').map(x=>+x);
R--;

let check = new Array(N).fill(0);
let graph = Array.from({length:N}, _ => new Array());
for (let m = 0; m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x);
    graph[a-1].push(b-1);
    graph[b-1].push(a-1);
}

for (let v of graph) {
    v.sort((a,b) => a-b);
}

let [k, kk] = [1, 0];
let queue = [R];
check[R] = k++;

while (queue.length < N) {
    let a = queue[kk++];
    if (a === undefined) break;
    for (let b of graph[a]) {
        if (check[b]===0) {
            queue.push(b);
            check[b] = k++;
        }
    }
}

console.log(check.join('\n'));