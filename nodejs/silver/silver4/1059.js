let [L, S, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;

S = S.split(' ').map(x=>+x);
S.sort((a,b) => a-b);

let sum = 0;
let [a,b] = [0, 0];
for (let i = 0 ; i < +L; ++i) {
    [a,b] = [b, S[i]];
    if (a < n && n < b) {
        let [A, B, C, D] = [a+1, ((a+1)===n)?(n+1):n, n, b-1];
        sum = (D-B+1) * (C-A+1);
        if (A !== C) sum--;
        break;
    }
}
console.log(sum);