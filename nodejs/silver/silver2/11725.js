let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let graph = new Array(N+1).fill(0).map(_=>new Array());
input.forEach(x => {
    let [a,b] = x.split(' ').map(x=>(+x));
    graph[a].push(b);
    graph[b].push(a);
});

let check = new Array(N+1).fill(false);
let answer = new Array(N+1).fill(0);
check[0] = true;
let rQueue = [1];
while (rQueue.length > 0) {
    const node = rQueue.pop();
    check[node] = true;

    for (const adj of graph[node]) {
        if (check[adj] === false) {
            answer[adj] = node;
            rQueue.push(adj);
        }
    }
}
console.log(answer.slice(2).join('\n'))