let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let row of input) {
    if (row === '0 0')break;
    let [a,b] = row.split(' ').map(x=>parseInt(x, 10));
    if (b%a === 0) output += 'factor\n';
    else if (a%b === 0) output += 'multiple\n';
    else output += 'neither\n';
}
console.log(output);