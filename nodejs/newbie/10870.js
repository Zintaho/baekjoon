let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
let fiv = Array(N+1).fill(0);
fiv[1] = 1;
for (i = 0; i < N-1; ++i) {
    fiv[i+2] = fiv[i] + fiv[i+1]
}
console.log(fiv[N]);