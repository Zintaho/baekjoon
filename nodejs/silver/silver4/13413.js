let [n, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;
let output = new Array(n);
for (let i = 0; i < n; ++i) {
    let cnt = 0;
    let [a, b] = [input[3*i + 1], input[3*i + 2]];
    let [a1, b1] = [0, 0];
    for (let j = 0; j < a.length; ++j) {
        let [aj, bj] = [a[j], b[j]];
        if (aj !== bj) cnt++;
        if (aj === 'W') a1++;
        if (bj === 'W') b1++;
    }
    let sum = 0;
    sum += Math.abs(a1-b1);
    cnt -= sum;
    sum += Math.floor(cnt/2)
    output[i] = sum;
}
console.log(output.join('\n'));