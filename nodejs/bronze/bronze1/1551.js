let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,K] = input[0].split(' ').map(x=>+x);
let arr = input[1].split(',').map(x=>parseInt(x, 10));
for (let k = 0; k < K; ++k) {
    for (let n = 0 ; n < N -k - 1; ++n) {
        arr[n] = arr[n+1] - arr[n];
    }
}
console.log(arr.slice(0,N-K).join(','));