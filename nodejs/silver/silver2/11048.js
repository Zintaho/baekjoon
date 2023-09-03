let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
input.forEach((x, i) => {
    input[i] = x.split(' ').map(x=>+x);
});

for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        let [a,b,c] = [0,0,0]
        if (m-1 >= 0) a = input[n][m-1];
        if (n-1 >= 0) b = input[n-1][m];
        if (m-1 >= 0 && n-1 >= 0) c = input[n-1][m-1];
        input[n][m] += Math.max(a,b,c);
    }
}
console.log(input[N-1][M-1]);