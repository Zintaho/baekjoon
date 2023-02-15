let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
A = A.split(' ').map(x=>+x);
B = B.split(' ').map(x=>+x);
let [a,b] = [0,0];
let answer = false;
for (let i = 0; i < 9; ++i) {
    a += A[i];
    if (a > b) answer = true;

    b += B[i];
    if (a > b) answer = true;
}
console.log(answer?'Yes':'No');