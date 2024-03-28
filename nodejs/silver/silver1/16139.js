let [S, q, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let counts = Array.from({length : S.length}, _ => new Array(26).fill(0));
counts[0][cc(S.charAt(0))]++;
for (let i = 1; i < S.length; ++i) {
    c = cc(S.charAt(i));
    counts[i][c]++;
    for (let j = 0; j < 26; ++j) {
        counts[i][j] += counts[i-1][j];
    }
}

let output = new Array(q);
for (let qq = 0; qq < q; ++qq) {
    let [a, l, r] = input[qq].split(' ');
    a = cc(a);
    [l, r] = [+l, +r];
    let [L, R] = [0, 0];
    if (l-1 >= 0) L = counts[l-1][a];
    if (r >= 0) R = counts[r][a];
    output[qq] = R - L;
}
console.log(output.join('\n'));

function cc(a) {
    let A = 'a'.charCodeAt(0);
    return a.charCodeAt(0) - A;
}