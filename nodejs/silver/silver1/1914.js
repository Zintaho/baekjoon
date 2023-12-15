let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

if (N <= 20) {
    
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


} else {
    // 곱셈을 O(log (n))으로 구현 가능하나 편의상 O(n)으로 구현
    let a = 2n;
    for (let i = 0; i < N-1; ++i) {
        a*=2n;
    }
    a-=1n;
    a = a.toString();
    console.log(a);
}