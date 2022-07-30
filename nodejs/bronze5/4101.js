let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let output = '';
for (row of input.slice(0, input.length-1)) {
    let ab = row.split(' ').map(x => parseInt(x));
    let a = ab[0];
    let b = ab[1];
    output += `${a - b <= 0 ? 'No' : 'Yes'}\n`;
}
console.log(output);