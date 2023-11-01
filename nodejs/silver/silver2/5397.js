let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let output = new Array(N);
for (let n = 0; n < N; ++n) {
    let [frontStack, rearStack] = [new Array(), new Array()];
    for (let c of input[n]) {
        switch (c) {
            case '<':
                let front = frontStack.pop();
                if (front) rearStack.push(front);
                break;
            case '>':
                let rear = rearStack.pop();
                if (rear) frontStack.push(rear);
                break;
            case '-':
                frontStack.pop();
                break;
            default:
                frontStack.push(c);
                break;
        }
    }
    output[n] = `${frontStack.join('')}${rearStack.reverse().join('')}`;
}
console.log(output.join('\n'));