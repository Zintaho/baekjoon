let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [a,b] = input.map(x=>parseInt(x, 10));
let X = Math.abs(Math.ceil(a/4) - Math.ceil(b/4));
let Y = Math.abs((a-1)%4-(b-1)%4);
console.log(X+Y);