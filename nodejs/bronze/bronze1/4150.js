let N = +require('fs').readFileSync('/dev/stdin').toString();
const fib = new Array(N+1);
fib[0] = 0n;
fib[1] = 1n;
for (let i = 2; i <= N; ++i) {
    fib[i] = fib[i-1] + fib[i-2];
}
let a = fib[N].toString();
console.log(a);