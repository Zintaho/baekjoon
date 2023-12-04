let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let graph = new Array(1001).fill(0);

let [min, max] = [1001, 0];
input.forEach(x => {
    let [l, h] = x.split(' ').map(x=>+x);
    graph[l] = h;
    min = Math.min(l, min);
    max = Math.max(l, max);
});

graph = graph.slice(min,max+1);

let hMax = 0;
let [start , maxStart, maxEnd, end] = [0, 0, graph.length-1, graph.length-1];
graph.forEach((h, i) => {
    if (h > hMax) {
        hMax = h;
        maxStart = i;
        maxEnd = i;
    } else if (h === hMax) {
        maxEnd = i;
    }
});

let sum = 0;
// LEFT
let current = graph[start];
for (let i = start; i < maxStart; ++i) {
    if (graph[i] > current) current = graph[i];
    sum += current;
}
// MAX
for (let i = maxStart; i <= maxEnd; ++i) {
    sum += hMax;
}
// RIGHT
current = graph[end];
for (let i = end; i > maxEnd; --i) {
    if (graph[i] > current) current = graph[i];
    sum += current;
}
console.log(sum);