let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);

let nums = Array.from({length:999}, (_, i) => i+2);
let primes = [];
let primeMap = {};

for (let i = 0 ; i < 999; ++i) {
    let k = nums[i];
    if (k === 0) continue;

    for (let j = (i+1); j < 999; ++j) {
        if (nums[j] % k === 0) nums[j] = 0;
    }

    primeMap[k] = primes.length;
    primes.push(k);
}

const getResult = (k, I) => {
    for (let a = 0; a < I; ++a) {
        for (let b = 0; b < I; ++b) {
            for (let c = 0; c < I; ++c) {
                let [A,B,C] =[primes[a], primes[b], primes[c]];
                if (primes[a] + primes[b] + primes[c] === k) {
                    return `${A} ${B} ${C}`;
                }
            }
        }
    }

    return 0;
}

for (let i = 0; i < +T; ++i) {
    let k = +input[i];
    let I = primeMap[k];
    if (!I) {
        for (let j = 0; j < primes.length; ++j) {
            let x = primes[j];
            if (x < k) I = j;
            else break; 
        }
    }
    let result = getResult(k, I);
    output[i] = result;
}

console.log(output.join('\n'));