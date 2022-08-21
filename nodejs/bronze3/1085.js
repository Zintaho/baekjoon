let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [x,y,w,h] = input.map(x=>parseInt(x, 10));
let k = Math.min(x, y, (w-x), (h-y));
console.log(k);