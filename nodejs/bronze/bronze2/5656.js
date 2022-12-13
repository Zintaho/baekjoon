let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let i in input) {
    if (input[i].split(' ')[1] === 'E') break;
    let result = eval(input[i]);
    output += `Case ${+i+1}: ${result}\n`;
}
console.log(output);