let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let num= input[0].split(' ').map(x=>parseInt(x, 10)).sort((a,b) => a-b);
let [a,b,c] = input[1].split('').map(c=>c.charCodeAt(0) - 'A'.charCodeAt(0));
console.log(num[a], num[b], num[c]);