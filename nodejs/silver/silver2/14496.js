let [ab, NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [a,b] = ab.split(' ').map(x=>+x);
let [N, M] = NM.split(' ').map(x=>+x);

let graph = Array.from({length:N+1}, _ => new Array());
input.forEach((x) => {
    let [A,B] = x.split(' ').map(x=>+x);
    graph[A].push(B);
    graph[B].push(A);
});

bfs();
function bfs() {
let depth = 0;
if (a===b) {
    console.log(depth);
    return;
}

let [start, end] = [0, 1];
let queue = [a];
let checked = new Array(N+1).fill(false);
checked[a] = true;

while (start !== end) {
    let tempEnd = end;
    for (let i = start ; i < end ; ++i) {
        let node = queue[i];
        for (let x of graph[node]) {
            if (!checked[x]) {
                checked[x] = true;
                queue.push(x);
                if (x === b) {
                    console.log(depth+1);
                    return;
                }
                tempEnd++;
            }
        }
    }
    start = end;
    end = tempEnd;
    depth++;
}

console.log(-1);
}