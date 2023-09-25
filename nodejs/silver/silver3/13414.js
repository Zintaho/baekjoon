let [KL, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [K, L] = KL.split(' ').map(x=>+x);

let output = new Array(L).fill('');
let map = {};
for (let i = 0; i < L; ++i) {
    let num = input[i];
    if (num in map) output[map[num]] = '';
    map[num] = i;
    output[i] = `${num}`;
}
let realoutput = new Array(K);
let [k, l] = [0, 0];
while ( k < K) {
    let num = output[l++];
    if (num !== '') realoutput[k++] = num;
}
console.log(realoutput.join('\n').trimEnd());