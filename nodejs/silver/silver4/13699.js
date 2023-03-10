let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let arr = new Array(N+1).fill(1n);
for (let i = 2; i <= N; ++i) {
    let sum = 0n;
    for (let a = 0; a < i; ++a) {
        let b = i - a - 1;
        sum += arr[a] * arr[b];
    }
    arr[i] = sum;
}
console.log(arr[N].toString());