let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let max = Number(input[0]);
let current = Number(input[0]);
input.forEach((x, i) => {
    if (i === 0) return;
    x = Number(x);
    current = Math.max(x, current*x);

    if (current > max) max = current;

});

console.log(max.toFixed(3));