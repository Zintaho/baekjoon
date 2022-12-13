let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, M, K] = input.map(x=>parseInt(x, 10));
let max = 0;
for (let a = 0; a <= K; ++a) {
    let A = (N - a);
    let B = (M - (K-a));
    A = Math.floor(A/2);
    let k = A < B? A: B;
    max = max < k? k : max;
}
console.log(max);