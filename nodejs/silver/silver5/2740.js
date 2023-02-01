let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x,i) => input[i] = x.split(' ').map(x=>+x));
let [N,M] = input[0];
let [,K] = input[N+1];

let col = new Array(N);
for (let n = 1; n <= N; ++n) {
    let row = new Array(K);
    for (let k = 0; k < K; ++k) {
        let sum = 0;
        for (let m = 0; m < M; ++m) {
            let a = input[n][m];
            let b = input[N+m+2][k];
            sum += a*b;
        }
        row[k] = sum;
    }
    col[n-1] = row.join(' ');
}
console.log(col.join('\n'));