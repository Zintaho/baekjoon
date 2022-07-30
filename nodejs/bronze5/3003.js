let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input.map(x => parseInt(x));

let chess = [1, 1, 2, 2, 2, 8];
let output = '';
for (i = 0; i < 6; ++i) {
    output += `${chess[i]-input[i]} `;
}
output.trimEnd();
console.log(output);