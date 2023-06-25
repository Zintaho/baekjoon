let [N, P, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, P] = [+N, +P];

class Node {
    constructor(x) {
        this.value = x;
    }
    value = 0;
    neighbours = [];
}

const graph = new Array(N).fill(0);
graph.forEach((_, i) => graph[i] = new Node(i+1));

for (let i = 0; i < P; ++i) {
    let [a,b] = input[i].split(' ').map(x=>+x);
    graph[a-1].neighbours.push(b-1);
    graph[b-1].neighbours.push(a-1);
}

DFS();

function DFS() {
    const visited = new Set();
    const stack = [graph[0]];

    while (stack.length !== 0) {
        let node = stack.pop();

        if (!visited.has(node.value)) {
            visited.add(node.value);
            for (let i of node.neighbours) {
                stack.push(graph[i]);
            }
        }
    }

    console.log(visited.size - 1);
}