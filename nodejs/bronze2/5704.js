let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (row of input) {
    if (row === '*') break;
    const set = new Set(row.split(''));
    set.delete(' ');
    output += `${set.size === 26?'Y':'N'}\n`
}

console.log(output);