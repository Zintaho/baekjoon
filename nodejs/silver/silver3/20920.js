let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let counts = {};
let output = [];

for (let i = 0; i < N; ++i) {
    let word = input[i];
    let len = word.length;
    if (len < M) continue;

    if (word in counts) counts[word]++;
    else {
        counts[word] = 1;
        output.push(word);
    }
}
output.sort((a,b) => {
    let [aCount, bCount] = [counts[a], counts[b]];
    if (aCount < bCount) return 1;
    else if (aCount > bCount) return -1;

    let [aLen, bLen] = [a.length, b.length];
    if (aLen < bLen) return 1;
    else if (aLen > bLen) return -1;

    if (a < b) return -1;
    else if (a > b) return 1;
})

console.log(output.join('\n'));