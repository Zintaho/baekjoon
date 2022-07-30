let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let N = parseInt(input[0]);
let output = '';
for (i = 1; i <= N ; ++i) {
    for (j = 1; j <= i; ++j) output += '*';
    output += '\n';
}
console.log(output);