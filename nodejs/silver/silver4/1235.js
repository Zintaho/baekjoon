let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let K = input[0].length;
let k = K;
while (--k >= 0) {
    let set = new Set();
    for (let i = 0; i < +N; ++i) {
        set.add(input[i].substring(k, K));
    }
    if (set.size === +N) {
        console.log(K - k);
        break;
    }
}
