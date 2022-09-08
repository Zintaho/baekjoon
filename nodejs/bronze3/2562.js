let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x, 10));
let max = 0;
let I = 1;
for (i = 1; i <= 9; ++i) {
    let k = input[i-1];
    if (k > max) {
        max = k;
        I = i;
    }
}
console.log(`${max}\n${I}\n`);