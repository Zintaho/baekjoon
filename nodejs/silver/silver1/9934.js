let [K, traversal] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
K = +K;
traversal = traversal.split(' ').map(Number);

let check = new Array(2**K).fill(false);
check[0] = true;

let standard = [];
recur(1);
let graph = new Array(2**K - 1).fill(0);
standard.forEach((x, i) => {
    graph[standard[i]] = traversal[i];
})
for (let k = 0; k < K; ++k) {
    console.log(graph.slice(2**k-1, 2**(k+1)-1).join(' '))
}

function recur(m) {
    let [l, r] = [m*2, m*2+1];
    if (l < 2**K && check[l] === false) recur(l);
    standard.push(m-1);
    check[l] = true;
    if (r < 2**K && check[r] === false) recur(r);
}