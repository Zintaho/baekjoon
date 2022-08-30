let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (i = 1; i <= 2*T; i += 2) {
    let N = parseInt(input[i], 10);
    let sum = input[i+1].split(' ').map(x=>parseInt(x, 10)).reduce((a,b) => a+b);
    output += `${sum}\n`;
}
console.log(output);