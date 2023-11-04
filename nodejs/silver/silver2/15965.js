let K = +require('fs').readFileSync('/dev/stdin').toString().trim();
let primes = [2];

let a = 3;
K--;
while(K > 0) {
    let isPrime = true;
    for (let p of primes) {
        if (p > Math.sqrt(a)) break;
        if (a % p === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        primes.push(a);
        K--;
    }
    a++;
}

console.log(primes[primes.length - 1]);