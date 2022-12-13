let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let stores = input[1].split(' ').map(x=>parseInt(x, 10));
let now = 0;
let sum = 0;
for (let i = 0; i<N; ++i) {
    let milk = stores[i];
    if (now === milk) {
        sum++;
        now++;
        now %= 3;
    }
}
console.log(sum);