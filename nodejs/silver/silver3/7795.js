let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);
for (let t = 0; t < +T; ++t) {
    let [NM, A, B] = [input[3*t], input[3*t+1], input[3*t+2]];
    let [N, M] = NM.split(' ').map(x=>+x);
    A = A.split(' ').map(x=>+x);
    A.sort((a,b) => b-a);
    B = B.split(' ').map(x=>+x);
    B.sort((a,b) => b-a);

    let [a,b] = [0, 0];
    let cnt = 0;
    while (a < N && b < M) {
        if (A[a] > B[b]) {
            cnt += (M - b);
            a++;
        } else {
            b++;
        }
    }
    output[t] = cnt;
}
console.log(output.join('\n'));