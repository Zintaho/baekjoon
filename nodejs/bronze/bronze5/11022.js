let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0]);
let output = '';
for (i = 1; i <= N; ++i) {
    let ab = input[i].split(' ').map(x => parseInt(x));
    let a = ab[0];
    let b= ab[1];
    output += `Case #${i}: ${a} + ${b} = ${a+b}\n`;
}
console.log(output);