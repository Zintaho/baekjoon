let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, K] = input.map(x=>parseInt(x, 10));
let k = 1;
let printed = false;
for (x = 1; x <= N; ++x) {
    if (N % x === 0) {
        if (K === k) {
            console.log(x);
            printed = true;
            break;
        }
        k += 1;
    }
}
if (!printed) console.log(0);