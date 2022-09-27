let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<= N; ++i) {
    let sum = 0;
    for (let c of input[i]) {
        if (c === ' ') continue;
        sum += c.charCodeAt(0) - 'A'.charCodeAt(0) + 1;
    }
    if (sum === 100) {
        output += `PERFECT LIFE\n`;
    } else {
        output += `${sum}\n`;
    }
}
console.log(output);
