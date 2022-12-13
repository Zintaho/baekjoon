let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [P, K] = input.map(x=>BigInt(x));
let o = 1;
for (i = K-1n; i >= 2n ; i -= 1n) {
    if (P%i !== 0n) continue;
    o = P/i < i? P/i : i;
    console.log('BAD', (o).toString());
    break;
}
if (o === 1)console.log('GOOD');
