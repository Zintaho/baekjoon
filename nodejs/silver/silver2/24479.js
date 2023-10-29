let [NMR, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, R] = NMR.split(' ').map(x=>+x);
R = R-1;

let graph = Array.from({length:N}, _ => new Array());
for (let m = 0; m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x - 1);
    graph[a].push(b);
    graph[b].push(a);
}

//sort
for (let n = 0; n < N; ++n) graph[n].sort((a,b) => b-a);

let output = new Array(N).fill(0);
let k = 1;

let stack = [R];
while (stack.length > 0) {
    let a = stack.pop();
    if (output[a] === 0) output[a] = k++;

    for (let b of graph[a]) {
        if (output[b] === 0) {
            stack.push(b);
        }
    }
}

console.log(output.join('\n'));