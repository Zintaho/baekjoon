let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103];
let len = primes.length;
let special = new Array(len-1);
for (let i = 0; i < len-1; ++i) {
    special[i] = primes[i] * primes[i+1];
}
for (let prime of special) {
    if (prime > N) {
        console.log(prime);
        break;
    }
}