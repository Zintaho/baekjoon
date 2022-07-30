let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let output = '';
for (i = 1; i <= N; ++i) {
    let str = input[i];
    output += `${str[0]}${str[str.length - 1]}\n`;
}
console.log(output);