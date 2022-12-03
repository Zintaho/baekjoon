let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];
let output = '';
for (let i = 1; i <= T; ++i) {
    let row = input[i].split(' ').reverse().join(' ');
    output += `Case #${i}: ${row}\n`;
}  
console.log(output);