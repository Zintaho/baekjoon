let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

let max = 1;
let stack = [];
let output = [];

let i = 0;
for (i; i < +N; ++i) {
    let next = input[i]

    while (max <= next) {
        stack.push(max++);
        output.push('+');
    }
    if (next === stack[stack.length - 1]) {
        stack.pop();
        output.push('-');
    } else {
        break;
    }
}

console.log(i === N?output.join('\n'):'NO');