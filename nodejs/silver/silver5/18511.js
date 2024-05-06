let [NK, set] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ');
let L = N.length;
N = +N;
K = +K;
set = set.split(' ');

let max = 0;
dfs();
console.log(max);

function dfs(current = '') {
    let C = +current;
    if (C <= N && C > max) {
        max = C;
    }

    if (current.length === L) {
        return;
    }

    for (let c of set) {
        dfs(current + c);
    }
}