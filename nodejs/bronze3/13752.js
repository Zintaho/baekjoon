let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i<= N; ++i) {
    output += `${'='.repeat(parseInt(input[i], 10))}\n`; 
}
console.log(output);