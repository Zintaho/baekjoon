let [T, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
T = +T;
let N = 1299709;

let primes = [];
let nums = Array.from({length:N-1}, _ => 0);

for (let i = 0; i < nums.length; ++i) {
    if (nums[i] === 1) continue;
    let I = i+2;

    for (let j = I; j <= N; j += I) {
        nums[j-2] = 1;
    }

    primes.push(I);
}
delete nums;

let output = new Array(T);
for (let t = 0 ; t < T; ++t) {
    let k = Number(input[t]);
    let [left, right] = [0, primes.length - 1];

    let num = 1;
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);

        let [a, b, c] = [primes[left], primes[mid], primes[right]];
        if (b === k) {
            num = 0;
            break;
        } else if (b < k) {
            left = mid + 1;
            num = primes[left] - b;
        } else if (k < b) {
            right = mid - 1;
            num = b - primes[right];
        }
    }
    output[t] = num;
}
console.log(output.join('\n'));