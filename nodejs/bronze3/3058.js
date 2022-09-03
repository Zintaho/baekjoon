let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = parseInt(input[0], 10);
let output = '';
for (i = 1; i<= T; ++i) {
    let evens = input[i].split(' ').map(x=>parseInt(x, 10)).filter(x=>x%2 == 0);
    let sum = evens.reduce((a,b) => a+b);
    let min = Math.min(...evens);
    output += `${sum} ${min}\n`;
}
console.log(output);