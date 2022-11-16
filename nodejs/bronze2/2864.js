let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [a5, b5, a6, b6] = [A, B, A, B];
while (a6.includes('5')) a6 = a6.replace('5', '6');
while (a5.includes('6')) a5 = a5.replace('6', '5');
while (b6.includes('5')) b6 = b6.replace('5', '6');
while (b5.includes('6')) b5 = b5.replace('6', '5');
let min = +(+a5 + +b5);
let max = +(+a6 + +b6);
console.log(`${min} ${max}`);