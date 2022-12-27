let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
let i = 1;
for (let row of input) {
    let [L, P, V] = row.split(' ').map(x=>+x);
    if (L+P+V === 0) break;

    let k = Math.floor(V/P);
    let sum = L * k;
    V -= P*k;
    sum += V > L? L : V;
    output += `Case ${i++}: ${sum}\n`;
}
console.log(output);