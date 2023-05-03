let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let cSet = new Set();
let cStack = [];
let sum = 0;
for (let c of input) {
    if (cSet.has(c)) {
        cSet.delete(c);
        let cnt = 0;
        for (let i = cStack.length-1; i >= 0; --i) {
            if (cStack[i] === c) {
                cStack.splice(i, 1);
                sum += cnt;
                break;
            }
            ++cnt;
        }
    } else {
        cSet.add(c);
        cStack.push(c);
    }
}

console.log(sum);