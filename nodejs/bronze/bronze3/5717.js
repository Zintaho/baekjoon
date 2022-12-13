let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let row of input) {
    if (row==='0 0') break;
    row = row.split(' ').map(x=>parseInt(x, 10)).reduce((a,b) => a+b);
    output += `${row}\n`
}
console.log(output);