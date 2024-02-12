let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let count = 0;
for (let n = 0; n < N-1; ++n) {
    for (let m = n+1; m < N; ++m) {
        count += check(input[n], input[m]);
    }
}
console.log(count);

function check(a, b) {
    let map = {};
    let set = new Set();
    for (let i = 0; i < a.length; ++i) {
        if (a[i] in map) {
            if (map[a[i]] !== b[i]) {
                return 0;
            }
        } else {
            if (set.has(b[i])) return 0;
            map[a[i]] = b[i];
            set.add(b[i]);
        }
    }
    return 1;
}