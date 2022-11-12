let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let row of input) {
    if (row === '.') break;
    let stack = [];
    for (let c of row) {
        switch (c) {
            default:
                continue;
            case '(':
            case '[':
                stack.push(c);
                break;
            case ')':
                if (stack[stack.length-1] === '(') stack.pop();
                else stack.push(c);
                break;
            case ']':
                if (stack[stack.length-1] === '[') stack.pop();
                else stack.push(c);
                break;
        }
    }
    output += `${stack.length === 0 ?'yes':'no'}\n`;
}
console.log(output);