let [NK, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ').map(x=>+x);
input = input.split('');

let count = 0;
for (let n = 0; n <N; ++n) {
    let a = input[n];
    if (a === 'P') {
        for (let k = n - K; k <= n + K; ++k) {
            if (k === n) continue;
            let b = input[k];
            if (b === 'H') {
                count++;
                input[k] = '0';
                break;
            }
        }
    }
}
console.log(count);