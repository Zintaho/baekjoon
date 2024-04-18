let [n, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
let output = [];
for (let i = 0; i < n; ++i) {
    let [cmd, a] = input[i].split(' ').map(Number);
    switch(cmd) {
        case 1:
            stack.push(a);
            break;
        case 2:
            a = stack.pop();
            output.push(a||-1);
            break;
        case 3:
            output.push(stack.length);
            break;
        case 4:
            output.push(stack.length>0?0:1);
            break;
        case 5:
            output.push(stack.length>0?stack[stack.length-1]:-1);
            break;
    }
}

console.log(output.join('\n'));