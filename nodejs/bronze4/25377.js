let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 0);
let K = -1;
for (i = 1; i <= N; ++i) {
    let [A, B] = input[i].split(' ').map(x=> parseInt(x, 10));
    if (A > B) continue;
    if (K === -1) {
        K = B; continue;
    }
    if (K > B) K = B;
}
console.log(K);