let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, F] = input.map(x => parseInt(x, 10));

let i = 0;
for (i; i < 100; ++i) {
    let a = N - N%100 + i;
    if (a%F === 0) break;
}
i = `${i < 10? '0':''}${i}`;
console.log(i);