let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let arr = new Array(N).fill(1n);
for (let i = 3; i <= N;++i) {
    arr[i] = arr[i-1] + arr[i-3];
}
console.log(arr[N-1].toString());