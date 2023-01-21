let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
let output = '';

let P = 1000000;
let K = 10;

output = '';

let primes = []

for (let k = 0; k < K; ++k) {
    let C = P/K;
    let tempprimes = new Array(C);
    for (let i = 0; i < C; ++i) {
        tempprimes[i] = i + C*k + 2; 
    }

    for (let i = 2; i <= Math.sqrt(P); ++i) {
        tempprimes = tempprimes.filter(x=>x%i !== 0||x==i);
    }
    primes = primes.concat(...tempprimes);
}

for (let i = 0n; i < N; ++i) {
    let result = 'YES';
    for (let j of primes) {
        if (input[i] % BigInt(j) === 0n) {
            result = 'NO';
            break;
        }
    }
    output += `${result}\n`;
}
console.log(output);