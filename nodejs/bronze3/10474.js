let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let row of input) {
    if (row === '0 0') break;
    let [a,b] = row.split(' ').map(x=>parseInt(x, 10));
    output += `${Math.floor(a/b)} ${a%b} / ${b}\n`
}
console.log(output);