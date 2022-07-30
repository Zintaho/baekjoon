let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let output = '';
for (let i = 1; i <= N; ++i) {
    let ab = input[i].split(' ').map(x => parseInt(x)).reduce((a, b) => a+b);
    output += `${ab}\n`;
}
console.log(output);