let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let output = 1;
let before = undefined;
for (let c of input) {
    let k = c === 'c'? 26 : 10;
    k += before === c? -1 : 0;
    before = c;
    output *= k;
}
console.log(output);