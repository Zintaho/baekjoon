let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(T);

for (let i = 0; i < +T; ++i) {
    let [NM, queue] = input.slice(2*i, 2*i + 2);
    queue = queue.split(' ').map(x=>+x);
    let [N, M] = NM.split(' ').map(x=>+x);
    let top = 0;
    let outCount = 0;
    while (outCount < N) {
        let a = queue[top];
        let isOut = true;
        for (let j = top + 1; j < queue.length; ++j) {
            if (queue[j] > a) {
                queue.push(a);
                if (M === top) M = queue.length-1;
                isOut = false;
                break;
            }
        }
        if (isOut) {
            outCount++;
            if (M === top) output[i] = outCount;
        }
        top++;
    }
}
console.log(output.join('\n'));