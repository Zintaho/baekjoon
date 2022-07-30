let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';

for (row of input) {
    row = row.split(' ').map(x => parseInt(x));
    let N = row[0];
    let S = row[1];
    output += `${Math.floor(S/(N+1))}\n`;
}
console.log(output);