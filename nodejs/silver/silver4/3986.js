let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let count = 0;
for (let i = 0; i < +N; ++i) {
    let word = input[i];
    let wordLen = word.length;
    if (wordLen %2 === 1) continue;

    let stack = [];
    for (let c of word) {
        let stackLen = stack.length;
        if (stackLen > wordLen / 2) break;
        if (stackLen === 0) {
            stack.push(c);
            continue;
        }
        let top = stack[stackLen-1];
        if (top === c) stack.pop();
        else stack.push(c);
    }
    if (stack.length === 0) count++;
}

console.log(count);