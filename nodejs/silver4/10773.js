let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
let K = input[0];
let stack = [0]
for (let i = 1; i <= K; ++i) {
    let k = input[i];
    if (k) stack.push(input[i]);
    else stack.pop();
}
console.log(stack.reduce((a,b) => a+b));