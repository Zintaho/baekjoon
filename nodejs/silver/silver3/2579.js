let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

/*
F[0] = input[0]
F[1] = input[0] + input[1]
F[2] = Max(<input[0] + input[2]>, input[1] + input[2])
F[3] = Max(<<F[1] + input[3]>>, <input[0] + input[2]> + input[3])
F[4] = Max(F[2] + input[4], <<F[1] + input[3]>> + input[4])
...
*/

let F = new Array(N);
F[0] = input[0];
if (N > 1) F[1] = input[0] + input[1];
let a = input[0] + input[2];
if (N > 2) F[2] = Math.max(a, input[1] + input[2]);
if (N > 3) {
    for (let i = 3; i < N; ++i) {
        let b = F[i-2] + input[i];
        F[i] = Math.max(b, a+input[i]);
        a = b;
    }
}
console.log(F[N-1]);