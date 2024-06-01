let [N, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;

let max = 0;
let maxPoke = '';
let sum = 0;

for (let n = 0; n < N; ++n) {
    let name = input[2*n];
    let [a, b] = input[2*n + 1].split(' ').map(Number);

    let count = 0;
    while (b >= a) {
        let k = Math.floor(b/a);
        count += k;

        b -= k * a;
        b += k * 2 ;
    }
    sum += count;
    if (count > max) {
        max = count;
        maxPoke = name;
    }
}
console.log(sum);
console.log(maxPoke);