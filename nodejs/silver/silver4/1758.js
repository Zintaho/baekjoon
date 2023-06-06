let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>+x);
N = +N;
input.sort((a,b) => b-a);

let sum = input.reduce((a,b) => a+b);
sum += N;
sum -= N*(N+1)/2;

input.forEach((x, i) => {
    x = x - (i+1-1);
    if (x >= 0) sum += x;
});

console.log(sum);