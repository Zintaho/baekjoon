let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let words = input.slice(0, N);
let M = +input[N];

let candidates = input.slice(N+1);

let start = '';
let end = '';
let set = new Set();
for (let n = 0; n < N; ++n) {
    let word = input[n];
    if (word === '?') {
        if (n-1 >= 0) {
            let prev = input[n-1];
            start = prev[prev.length - 1];
        }

        if (n+1 < N) {
            let next = input[n+1];
            end = next[0];
        }
        continue;
    }
    set.add(word);
}

for (let m = 0; m < M; ++m) {
    let candidate = candidates[m];
    if (start !== '') {
        if (candidate[0] !== start) continue;
    }

    if (end !== '') {
        if (candidate[candidate.length - 1] !== end) continue;
    }

    if (set.has(candidate)) continue;

    console.log(candidate);
    break;
}