let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
let stack = [];
for (let i = 1; i<= N; ++i) {
    let cmd = input[i].split(' ');
    let k = cmd.length === 2?parseInt(cmd[1]):-1;
    cmd = cmd[0];

    let answer = '';
    switch (cmd) {
        case 'push':
            stack.push(k);
            continue;
        case 'pop':
            if (stack.length) {
                answer = k = stack[stack.length-1];
                stack.pop();
            } else answer = -1;
            break;
        case 'size':
            answer = stack.length;
            break;
        case 'empty':
            answer = stack.length === 0? 1:0;
            break;
        case 'top':
            answer = stack.length !== 0 ?stack[stack.length-1]:-1;
            break;
    }
    output += `${answer}\n`;
}
console.log(output);