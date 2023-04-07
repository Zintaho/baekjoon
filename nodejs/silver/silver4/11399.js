let [, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

input = input.split(' ').map(x=>+x);
input.sort((a,b) => a-b);

let sum = 0;
let result = 0;
input.forEach((x) => {
    sum += x;
    result += sum;
}) 

console.log(result);