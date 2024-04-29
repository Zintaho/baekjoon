let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let max = 0;
let output = 0;
for (let n = 0; n < +N; ++n) {
    let cards = input[n].split(' ').map(Number);
    let cMax = 0;
    for (let a = 0; a < 3; ++a) {
        for (let b = a+1; b < 4; ++b) {
            for (let c = b+1; c < 5; ++c) {
                let [A, B, C] = [cards[a], cards[b], cards[c]];
                cMax = Math.max(cMax, (A+B+C)%10);
            }
        }
    }
    if (max <= cMax) {
        max = cMax;
        output = n+1;
    }
}
console.log(output);