let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let fib = new Array(N+1);
fib[0] = 1;
if (N>0) fib[1] = 1;

for (let i=2; i <= N; ++i) {
    let a = fib[i-1] + fib[i-2] + 1;
    if (a >= 1000000007) a%=1000000007
    fib[i] = a;
}
console.log(fib[N]);