let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let max = Math.max(...input);
let seq = new Array(max+1);
seq[0] = '-';
for (let i = 1; i <= max; ++i) {
    seq[i] = seq[i-1] + ' '.repeat(seq[i-1].length) +seq[i-1];
}
input = input.map(x=>seq[x]);

console.log(input.join('\n'));