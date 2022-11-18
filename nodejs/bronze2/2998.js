let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let map = {
    '000' : '0',
    '001' : '1',
    '010' : '2',
    '011' : '3',
    '100' : '4',
    '101' : '5',
    '110' : '6',
    '111' : '7'
}
if (input.length % 3 === 1) input = `00${input}`;
else if (input.length % 3 === 2) input = `0${input}`;
let output = '';
for (let i = 0; i < input.length; i += 3) {
    let sliced = input.slice(i, i+3);
    output += map[sliced];
}
console.log(output);