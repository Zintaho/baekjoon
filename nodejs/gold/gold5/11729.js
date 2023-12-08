let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let k = Math.pow(2, N) - 1;
let output = new Array(k);
let i = 0;

hanoi(1, 3, N);

function hanoi(from, to, n) {
    if (n <= 0) return;

    if (from === 1 && to === 2) {
        hanoi(from, 3, n-1);
        output[i++] = `${from} ${to}`;
        hanoi(3, to, n-1);
    } else if (from === 1 && to === 3) {
        hanoi(from, 2, n-1);
        output[i++] = `${from} ${to}`;
        hanoi(2, to, n-1);
    } else if (from === 2 && to === 1) {
        hanoi(from, 3, n-1);
        output[i++] = `${from} ${to}`;
        hanoi(3, to, n-1);
    } else if (from === 2 && to === 3) {
        hanoi(from, 1, n-1);
        output[i++] = `${from} ${to}`;
        hanoi(1, to, n-1);
    } else if (from === 3 && to === 1) {
        hanoi(from, 2, n-1);
        output[i++] = `${from} ${to}`;
        hanoi(2, to, n-1);
    } else if (from === 3 && to === 2) {
        hanoi(from, 1, n-1);
        output[i++] = `${from} ${to}`;
        hanoi(1, to, n-1);
    }
}

console.log(k);
console.log(output.join('\n'));