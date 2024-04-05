let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);

let graph = Array.from({length : N}, _ => new Array());
for (let m = 0; m < M; ++m) {
    let [a, b] = input[m].split(' ').map(x=> (+x) - 1);
    graph[a].push(b);
    graph[b].push(a);
}
let DEPTH = 0;
let FIRST = 0;
let COUNT = 0;
bfs();
console.log(FIRST+1, DEPTH, COUNT);

function bfs() {
    let queue = [0];
    let depth = 0;
    let checked = new Array(N).fill(false);
    checked[0] = true;

    while (queue.length > 0) {
        DEPTH = depth;
        FIRST = queue[0];
        COUNT = queue.length;

        let newQueue = [];
        for (let i = 0; i < queue.length; ++i) {
            let a = queue[i];
            for (let b of graph[a]) {
                if (checked[b]) continue;

                checked[b] = true;
                newQueue.push(b);
            }
        }
        queue = newQueue.sort((a,b) => a-b);
        depth++;
    }
}