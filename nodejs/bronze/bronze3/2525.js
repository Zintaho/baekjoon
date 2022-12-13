let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [h, m] = input[0].split(' ').map(x=>parseInt(x, 10));
let k = parseInt(input[1], 10);
m += k;
h += Math.floor((m)/60);
h %= 24;
m %= 60;
console.log(h, m);