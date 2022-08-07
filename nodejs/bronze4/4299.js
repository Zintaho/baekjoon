let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let [ApB, AmB] = input.map(x => parseInt(x));
let A = (ApB+AmB) / 2;
if (!Number.isInteger(A)) {
    console.log(-1);
    return;
}
let B = ApB - A;
if (B < 0) {
    console.log(-1);
    return;
}
if (B > A) {
    let temp = B;
    B = A;
    A = temp;
}
console.log(A, B);