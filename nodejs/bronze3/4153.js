let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let row of input) {
    if (row === '0 0 0') break;
    let [a,b,c] = row.split(' ').map(x=>parseInt(x, 10)).sort((a,b)=>a-b);
    output += `${a*a + b*b === c*c?'right':'wrong'}\n`;
}
console.log(output);