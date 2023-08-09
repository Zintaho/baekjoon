let [a,b] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let stack = [];
for (let ac of a) {
    stack.push(ac);
    while (stack.length >= b.length) {
        let isBomb = true;
        for (let k = stack.length - b.length; k < stack.length; ++k) {
            if (stack[k] !== b[k - (stack.length - b.length)]) {
                isBomb = false;
                break;
            }
        }
        if (isBomb) {
            for (let i = 0; i < b.length; ++i) stack.pop();
        } else break;
    }
}
console.log(stack.join('')||'FRULA');