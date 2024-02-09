let [N, A, OPS] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
A = A.split(' ').map(Number);
OPS = OPS.split(' ').map(x=>+x);

let max = -1_000_000_001;
let min = +1_000_000_001;
dfs();
console.log(`${max}\n${min}`)

function dfs(ops=[...OPS], sum = A[0], n = 1) {
    if (n === N) {
        max = Math.max(sum, max);
        min = Math.min(sum, min);
    } else {
        if (ops[0] > 0) {
            let newOPS = [...ops];
            newOPS[0]--;
            dfs(newOPS, sum + A[n], n+1);
        } 
        if (ops[1] > 0) {
            let newOPS = [...ops];
            newOPS[1]--;
            dfs(newOPS, sum - A[n], n+1);    
        } 
        if (ops[2] > 0) {
            let newOPS = [...ops];
            newOPS[2]--;
            dfs(newOPS, sum * A[n], n+1);    
        } 
        if (ops[3] > 0) {
            let newOPS = [...ops];
            newOPS[3]--;
            let newSum = Math.floor(Math.abs(sum) / Math.abs(A[n]));
            if (sum * A[n] < 0) newSum *= -1;
            dfs(newOPS, newSum, n+1);    
        }
    }
}