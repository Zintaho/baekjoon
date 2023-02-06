let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let fib = new Array(N+2);
fib[0] = fib[1] = 1n;
for (let i = 2; i < N+2; ++i) {
    fib[i] = fib[i-1] + fib[i-2];
}
console.log((fib[N+1]*2n).toString());