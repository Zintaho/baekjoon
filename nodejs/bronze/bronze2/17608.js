let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let nums = input.slice(1).map(x=>parseInt(x, 10));
let stack = [];
let min = 0;
while (nums.length > 0) {
    let k = nums.pop();
    if (k > min) {
        stack.push(k);
        min = k;
    }
}
console.log(stack.length);