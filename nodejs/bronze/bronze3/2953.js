let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let n = 1;
let max = 0;
for (let i = 1; i <= 5; ++i) {
    let sum = input[i-1].split(' ').map(x=>parseInt(x, 10)).reduce((a,b) => a+b);
    if (sum > max) {
        n = i;
        max = sum;
    }
}
console.log(n, max);