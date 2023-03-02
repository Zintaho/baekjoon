let [AB, N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A, B] = AB.split(' ').map(x=>+x);
let min = Math.abs(A-B);
for (let n = 0; n < N; ++n) {
    let C = +input[n];
    let k = Math.abs(B-C) + 1;
    if (k < min) min = k;
}
console.log(min);