let [NL, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, L] = NL.split(' ').map(Number);

let sum = 0;
let lastPos = 0;
for (let n = 0; n < N; ++n) {
    let [d, r, g] = input[n].split(' ').map(Number);
    sum += (d - lastPos);
    let a = sum % (r+g);

    if (a <= r) {
        sum += (r-a);
    }

    lastPos = d;
}
sum += L - lastPos;

console.log(sum);