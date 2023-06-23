let [N, A, M, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[N, M] = [+N, +M];
A = A.split(' ');

A.forEach((x, i) => {
    if (i === 0) A[i] = Number(x);
    else A[i] =  Number(x) + A[i-1];
});

A = [0, ...A];

let output = new Array(M);
for (let m = 0; m < M; ++m) {
    let [i, j] = input[m].split(' ').map(x=> (+x));
    output[m] = A[j] - A[i-1];
}
console.log(output.join('\n'));