let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(BigInt);
let checked = new Array(input.length).fill(0n);
let count = 0;

let n = 1;

while (count < input.length) {
    let N = BigInt('1'.repeat(n));
    for (let i = 0; i < input.length; ++i) {
        if (checked[i] !== 0n) continue;
        let a = input[i];
        if (a === 1n) {
            checked[i] = 1;
            count++;
        } else if (N % a === 0n) {
            checked[i] = N.toString().length;
            count++;
        }
    }
    ++n;
}

console.log(checked.join('\n'));