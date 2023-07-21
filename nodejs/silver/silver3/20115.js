let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(x=>+x);
let max = Math.max(...input);
let idx = input.indexOf(max);

let sum = 0;
input.forEach((x, i) => {
    if (i === idx) return;

    sum += x;
})
sum /= 2;
sum += max;

console.log(sum);