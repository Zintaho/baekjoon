let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let tags = input.slice(0, N);
let chars = input.slice(N, N+M).map(Number);
tags.forEach((x, i) => {
   let [a, b] = x.split(' ');
   b = Number(b);

   tags[i] = [a, b];
});

let output = new Array(M);
for (let m = 0; m < M; ++m) {
    let char = chars[m];
    let [left, right] = [0, N-1];
    let tag = '';
    while (left <= right) {
        let mid = Math.floor((left+ right) / 2);
        let [a, b] = tags[mid];

        if (char > b) {
            left = mid + 1;
        } else if (char <= b) {
            tag = a;
            right = mid - 1;
        }
    }
    output[m] = tag;
}

console.log(output.join('\n'))
