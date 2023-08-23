let [a,b,c] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let [one, two] = [0, 0];
if (a === 1) one++;
else two++;

if (b === 1) one++;
else two++;

if (c === 1) one++;
else two++;

console.log(one>two?1:2);