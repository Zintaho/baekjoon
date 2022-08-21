let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A,B] = input.map(x => parseInt(x, 10));
let M = (B-A)/400;
console.log(1/(1+Math.pow(10, M)));