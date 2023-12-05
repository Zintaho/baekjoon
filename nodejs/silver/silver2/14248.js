let [n, graph, s] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;
graph = graph.split(' ').map(x=>+x);

let count = 0;
let checked = new Array(n).fill(false);

s = +s - 1;
checked[s] = true;
let stack = [s];

while (stack.length > 0) {
    let a = stack.pop();
    count++;

    let x = graph[a];
    let [left, right] = [a-x, a+x];

    if (left >= 0 && checked[left] === false) {
        checked[left] = true;
        stack.push(left);
    }
    
    if (right < n && checked[right] === false) {
        checked[right] = true;
        stack.push(right);
    }
}

console.log(count);