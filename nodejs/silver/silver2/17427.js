let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = 0;
for (let i = 1; i <= N; ++i) {
    sum += (i) * Math.floor(N/i);
}
console.log(sum);