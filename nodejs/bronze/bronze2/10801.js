let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
A = A.split(' ').map(x=>+x);
B = B.split(' ').map(x=>+x);
let sum = 0;
for (let i = 0; i < 10; ++i) {
    let result = A[i]-B[i];
    if (result  > 0) sum += 1;
    else if (result < 0) sum -=1;
}
let output = 'D';
if (sum > 0) output = 'A';
if (sum < 0) output = 'B';
console.log(output);