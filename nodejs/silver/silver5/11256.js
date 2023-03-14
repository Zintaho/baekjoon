let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);

let k = 0;
for (let i = 0; i < T; ++i) {
    let [J, N] = input[k++].split(' ').map(x=>+x);
    let K = k + N;
    
    let boxes = new Array(N);
    let n = 0;
    for (k; k < K; ++k, ++n) {
        boxes[n] = input[k].split(' ').reduce((a,b) => +a * +b);
    }

    boxes.sort((a,b) => b-a);
    let count = 1;
    for (let box of boxes) {
        J -= box;
        if (J <= 0) break;
        ++count;
    }

    output[i] = count;
}

console.log(output.join('\n'));