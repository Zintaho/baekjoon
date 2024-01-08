let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let K = 52;
let dp = Array.from({length : K}, _ => new Array(K).fill(Infinity));

for (let n = 0; n < N; ++n) {
    let [a, _, b] = input[n].split(' ');
    a = getCC(a);
    b = getCC(b);
    dp[a][b] = 1;
}

for (let k = 0; k < K; ++k) {
    for (let a = 0; a < K; ++a) {
        for (let b = 0; b < K; ++b) {
            dp[a][b] = Math.min(dp[a][b], dp[a][k] + dp[k][b]);
        }
    }
}

let output = []
for (let i = 0; i < K; ++i) {
    for (let j = 0; j < K; ++j) {
        if (i === j) continue;
        if (dp[i][j] !== Infinity) output.push(`${getC(i)} => ${getC(j)}`);
    }
}
console.log(output.length);
console.log(output.join('\n'));

function getCC(c) {
    let A = 'A'.charCodeAt(0);
    let a = 'a'.charCodeAt(0);
    let cc = c.charCodeAt(0);


    if (cc < a) return cc - A;
    else return cc - a + 26;
}

function getC(n) {
    let A = 'A'.charCodeAt(0);
    let a = 'a'.charCodeAt(0);

    if (n < 26) return String.fromCharCode(A + n);
    else return String.fromCharCode(a - 26 + n);
}