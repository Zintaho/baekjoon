let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let Y = 0;
let M = 0;
for (let k of input[1].split(' ').map(x => parseInt(x, 10))) {
    Y += (Math.floor(k/30) * 10 + 10);
    M += (Math.floor(k/60) * 15 + 15);
}
let output = '';
if (Y <= M) output += 'Y ';
if (Y >= M) output += 'M ';
output += Y < M ? Y : M;
console.log(output);