let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let dp = Array.from({length: 26}, _ => new Array(26).fill(Infinity));

let [N, M] = [0, 0];
let i = 0;

let A = 'a'.charCodeAt(0);
let max = -1;
while(N >= i) {
    if (N === 0) {
        N = +input[i++];
        continue;
    }

    let [a,_,b] = input[i++].split(' ');
    a = a.charCodeAt(0) - A;
    b = b.charCodeAt(0) - A;
    dp[a][b] = 1;
    max = Math.max(a, b, max);
}

for (let k = 0; k <= max; ++k) {
    for (let a = 0 ; a <= max; ++a) {
        for (let b = 0 ; b <= max; ++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }
    }
}

M = +input[i++];
let output = new Array(M);
for (let m = 0; m < M; ++m, ++i) {
    let [a, _, b] = input[i].split(' ');
    a = a.charCodeAt(0) - A;
    b = b.charCodeAt(0) - A;
    output[m] = dp[a][b]===Infinity?'F':'T';
}

console.log(output.join('\n'));