let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let A = input[1].split(' ').slice(0, N).map(x=>parseInt(x, 10));
let [B, C] = input[2].split(' ').map(x=>parseInt(x, 10));
let sum = 0;
for (let i = 0; i < N; ++i) {
    A[i] -= B;
    sum++;
    if (A[i] > 0) sum += Math.ceil(A[i]/C);
}
console.log(sum);