let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let stack = [];
for (let c of input) {
    if (c === ')' && stack[stack.length - 1] === '(') {
        stack.pop();
    } else {
        stack.push(c);
    }
}

console.log(stack.length);