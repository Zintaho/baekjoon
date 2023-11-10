let [n, m, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m] = [+n, +m];
let graph = Array.from({length : n}, _ => new Array());

input.forEach(x => {
    let [a,b] = x.split(' ').map(x=>(+x - 1));
    graph[a].push(b);
    graph[b].push(a);
});
let set = new Set();
for (let a of graph[0]) {
    set.add(a);
    for (let b of graph[a]) {
        set.add(b);
    }
}
set.delete(0);
console.log(set.size);