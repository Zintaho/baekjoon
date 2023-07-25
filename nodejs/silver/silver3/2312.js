let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let max = Math.max(...input);
let check = new Array(max-1).fill(false);
let primes = [];

for (let i = 2; i <= max; ++i) {
    if (check[i-2]) continue;
    primes.push(i);
    for (let j = i; j <= max; j += i) {
        check[j-2] = true;
    }
}

let output = [];
for (let i = 0; i < N; ++i) {
    let k = input[i];
    for (let j of primes) {
        let cnt = 0;
        while (k % j === 0) {
            k /= j;
            cnt++;
        }
        if (cnt > 0) {output.push(`${j} ${cnt}`);}
    }
}
console.log(output.join('\n'));