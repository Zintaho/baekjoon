let input = require('fs').readFileSync('/dev/stdin').toString().trim();
input = input.split('-');

let sum = 0;
let i = 0;
for (let num of input) {
    let k = 0;
    num.split('+').forEach(x=> k+=parseInt(x));

    if (i++ === 0) sum += k;
    else sum -= k;
}
console.log(sum);