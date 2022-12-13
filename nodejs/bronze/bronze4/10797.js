let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = 0;
for (k of input[1].split(' ').map(x=>parseInt(x, 10))) {
    if (k == N) output += 1;
}
console.log(output);