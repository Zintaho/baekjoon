let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input.forEach((x, i) => input[i] = x.split(' ').map(x=>+x));

let min = 10000001;
for (let n = 0; n < 1; ++n) {
    let check = new Array(N).fill(false);
    check[n] = true;
    fill(n, check, [n]);
}
function fill(k, check, seq) {
    let valid = true;
    for (let i = 0; i < N; ++i) {
        if (check[i] === false) {
            if (input[k][i] === 0){
                valid = false;
                break;
            }
            const newCheck = [...check];
            newCheck[i] = true;
            fill(i, newCheck, [...seq, i]);
        }
    }
    if (seq.length < N) valid = false;
    if (input[k][seq[0]] === 0) valid = false;
    if (!valid) return;
    let sum = 0;
    for (let i = 0; i < N; ++i) {
        sum += input[seq[i%N]][seq[(i+1)%N]];
    }
    min = Math.min(sum, min);
}
console.log(min);