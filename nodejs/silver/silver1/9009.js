let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let max = Math.max(...input);
let fib = [0, 1];
while (true) {
    let n = fib.length;
    let next = fib[n-2] + fib[n-1];
    if (next > max) break;
    fib.push(next);
}

let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let stack = [];
    let N = input[t];
    let cursor = fib.length - 1;
    while (N > 0) {
        let a = fib[cursor--];
        if (a <= N) {
            N -= a;
            stack.push(a);
        }
    }
    output[t] = stack.reverse().join(' ');
}
console.log(output.join('\n'));