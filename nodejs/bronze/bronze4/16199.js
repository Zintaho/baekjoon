let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [y1, m1, d1] = input[0].split(' ').map(x => parseInt(x, 10));
let [y2, m2, d2] = input[1].split(' ').map(x => parseInt(x, 10));
let k = (m1 > m2 || (m1 == m2 && d1 > d2)) ? -1 : 0;
let age1 = y2 - y1 + k;
let age3 = y2 - y1;
console.log(age1);
console.log(age3 + 1);
console.log(age3);