let N = +require('fs').readFileSync('/dev/stdin').toString();
let [f1, f2] = [1, 0];
const fib1 = (n) => {
    if (n === 1 || n === 2) return 1;
    else {f1+=1; return (fib1(n-1) + fib1(n-2))}; 
}

const fib2 = (n) => {
    if (n < 3) f2 = 1;
    else f2 = n - 2;
}
fib1(N);
fib2(N);

console.log(f1, f2);