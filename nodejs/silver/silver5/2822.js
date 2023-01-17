let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
for (let i = 0; i < 3; ++i) {
    let idx = input.indexOf(Math.min(...input));
    input[idx] = 151;
}

let sum = 0;
let output =[];
for (let i = 0; i <8; ++i) {
    let score = input[i];
    if (score <= 150) {
        sum += score;
        output.push(i+1);
    }
}
console.log(sum);
console.log(output.join(' '));
