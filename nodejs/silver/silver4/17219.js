let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let map = {};
for (let i = 0 ; i < N; ++i) {
    let [page, pw] = input[i].split(' ');
    map[page]=pw;
}
let output = new Array(M);
for (let i = N; i < M+N; ++i) {
    let page = input[i];
    output[i-N] = map[page];
}
console.log(output.join('\n'));