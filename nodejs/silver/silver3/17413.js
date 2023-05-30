let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let output = '';

let stack = [];
let queue = [];
let tag = false;
for (let c of input) {
    if (c === '<') {
        let temp = '';
        while (stack.length) temp += stack.pop();
        output += temp;
        tag = true;
    } else if (c === '>') {
        output += queue.join('');
        output += c;
        queue = [];
        tag = false;
        continue;
    } else if (c === ' ' && !tag) {
        let temp = '';
        while (stack.length) temp += stack.pop();
        output += temp;
        output += ' ';
        continue;
    }

    if (tag) {
        queue.push(c);
    } else {
        stack.push(c);
    }
}
let temp = '';
while (stack.length) temp += stack.pop();
output += temp;

console.log(output);