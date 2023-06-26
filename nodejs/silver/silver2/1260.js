let [NMV, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M, V] = NMV.split(' ').map(x=>+x);

const graph = new Array(N+1).fill(0);
graph.forEach((_,i) => {graph[i] = [];});

for (let m = 0; m < M; ++m) {
    let [i, j] = input[m].split(' ').map(x=>+x);
    graph[i].push(j);
    graph[j].push(i);
}

for( let [_,v] of Object.entries(graph)) {
    v.sort((a,b) => b-a);
}
DFS(V);
for( let [_,v] of Object.entries(graph)) {
    v.sort((a,b) => a-b);
}
BFS(V);

function DFS(k) {
    const visited = new Set();
    const stack = [k];

    while (stack.length !== 0) {
        let node = stack.pop();

        if (!visited.has(node)) {
            visited.add(node);

            for (let i of graph[node]) {
                stack.push(i);
            }
        }
    }
    console.log(...visited.keys());
}
function BFS(k) {
    const visited = new Set();
    const queue = [k];

    while (queue.length !== 0) {
        let node = queue.shift();

        if (!visited.has(node)) {
            visited.add(node);

            for (let i of graph[node]) {
                queue.push(i);
            }
        }
    }
    console.log(...visited.keys());
}