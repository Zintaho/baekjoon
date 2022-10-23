let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<=N; ++i) {
    output += `${input[i].toLowerCase()}\n`;
}
console.log(output);