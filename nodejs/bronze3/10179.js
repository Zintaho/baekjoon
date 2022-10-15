let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1 ; i <= N; ++i) {
    output += `$${(parseFloat(input[i]) * 0.8).toFixed(2)}\n`;
}
console.log(output);