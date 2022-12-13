let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [N, M] = [A.length, B.length];
let [aa,ab,ba,bb] = [0, 0, 0, 0];

let end = false;
for (let m=0;m < M; ++m) {
    for (let n=0;n < N; ++n) {
        if (A[n] === B[m]) {
            ba = n;
            bb = m;
            end = true;
            break;
        }
    }
    if (end) break;
}
for (let n=0;n < N; ++n) {
    for (let m=0;m < M; ++m) {
        if (A[n] === B[m]) {
            aa= n;
            ab = m;
            end = false;
            break;
        }
    }
    if (!end) break;
}
let a = aa < ba ? aa : ba;
let b = aa < ba ? ab : bb;

let output = '';
for (let m = 0; m < M; ++m) {
    let row = new Array(N).fill('.');
    row[a] = B[m];
    if (m === b) row = A;
    else row = row.join('');

    output += `${row}\n`;
}
console.log(output);