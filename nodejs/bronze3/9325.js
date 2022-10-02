let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
let N = parseInt(input[0], 10);
let [i, k] = [1, 0];
while (++k <= N) {
    let sum = parseInt(input[i++], 10);
    let n = parseInt(input[i++], 10);
    let I = i;
    for (i; i < I+n; ++i) {
        let [a,b] = input[i].split(' ').map(x=>parseInt(x, 10));
        sum += a*b;
    }
    output += `${sum}\n`;
}
console.log(output);