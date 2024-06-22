let [N, input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;
input = input.split(' ').map(Number);

// 2**20 Boolean 배열이 차지하는 메모리 : 1MB (1 * (2**20)) byte === 8MB
let check = new Array(2**N).fill(false);
for (let i = 1; i < 2**N; ++i) {
    let b = i.toString(2);
    if (b.length < N) b = `${'0'.repeat(N-b.length)}${b}`;
    b = b.split('');
    let sum = 0;
    b.forEach((x, i) => {
        if (x === '1') sum += input[i];
    });
    check[sum-1] = true;
}
for (let i = 1; i <= check.length; ++i) {
    if (check[i-1] === false) {
        console.log(i);
        break;
    }
}