let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
let n = input[0];
let output = '';
for (let x of input.slice(1)) {
    if (x === 0) break;
    let isMultiple = (x % n === 0);
    output += `${x} is${isMultiple?'':' NOT'} a multiple of ${n}.\n`;
}
console.log(output);