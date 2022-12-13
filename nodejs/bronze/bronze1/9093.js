let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];
let output = '';
for (let i = 1; i<=T; ++i) {
    const row = input[i].split(' ').map(x=>x.split('').reverse().join('')).join(' ');
    output += `${row}\n`;
}
console.log(output);