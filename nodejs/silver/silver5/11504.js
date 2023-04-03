let [T, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let k = 0;

let output = new Array(T);
for (let i = 0; i < T; ++i) {
    let [N, M] = input[k++].split(' ');
    N = +N; M = +M;
    let X = +input[k++].split(' ').join('');
    let Y = +input[k++].split(' ').join('');
    let sum = 0;

    let nums = (input[k++]+' ').repeat(2).trimEnd().split(' ').slice(0, N+M-1).join('');
    for (let j = 0; j < N; ++j) {
        let Z = +nums.substring(j, j+M);
        if (X <= Z && Z <= Y) ++sum;
    }

    output[i] = sum;
}

console.log(output.join('\n'));