let [NMKX, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, K, X] = NMKX.split(' ').map(x=>+x);
let graph = Array.from({length:N+1}, _ => new Array());
for (let m = 0; m < M; ++m) {
    let [a, b] = input[m].split(' ').map(x=>+x);
    graph[a].push(b);
}

bfs(X);

function bfs(n) {
    let check = new Array(N+1).fill(true);
    let row = [n];
    check[n] = false;
    for (let k = 1; k <= K; ++k) {
        let newRow = [];
        for (let x of row) {
            for (let y of graph[x]) {
                if (check[y]) {
                    check[y] = false;
                    newRow.push(y);
                }
            }
        }
        row = newRow;
        if (row.length === 0) break;
    }
    row.sort((a,b) => a-b);
    console.log(row.length >0 ? row.join('\n'): (-1).toString());
}