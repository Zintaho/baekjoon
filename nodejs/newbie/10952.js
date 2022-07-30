let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = input.length;
let output = '';
for (let i = 0; i < N-1; ++i) {
    let ab = input[i].split(' ').map(x => parseInt(x)).reduce((a, b) => a+b);
    output += `${ab}\n`;
}
console.log(output);