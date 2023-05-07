let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let set = new Set();
let count = 0;
for (let i = 0 ;i < +N; ++i) {
    let word = input[i];
    let hh = hash(word);

    for (let h of hh) {
        if (set.has(h)) {
            count++;
            break;
        }
        else set.add(h);
    }
}
console.log(N - count);

function hash(x) {
    const len = x.length;
    x = x+x;
    let hashes = new Set();
    for (let i = 0; i < len; ++i) {
        hashes.add(x.substring(i, i+len));
    }
    return hashes;
}