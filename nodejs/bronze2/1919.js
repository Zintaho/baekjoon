let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let arrA = new Array(26).fill(0);
let arrB = new Array(26).fill(0);

let sum = 0;
for (let a = 0; a < A.length; ++a) arrA[A.charCodeAt(a) - 97]++;
for (let b = 0; b < B.length; ++b) arrB[B.charCodeAt(b) - 97]++;
for (let i = 0; i < 26; ++i) {
    sum += Math.abs(arrA[i] - arrB[i]);
}
console.log(sum);