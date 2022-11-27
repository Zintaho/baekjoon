let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let output = '';

for (let row of input) {
    let c = row[0].toLowerCase();
    row = row.substring(2).toLowerCase();
    let cnt = 0;
    
    for (let ch of row) if(c === ch) ++cnt;

    output += `${c} ${cnt}\n`;
}
console.log(output);