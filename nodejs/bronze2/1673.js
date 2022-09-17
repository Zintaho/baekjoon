let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (let row of input) {
    let [n, k] = row.split(' ').map(x=>parseInt(x, 10));
    let sum = n;
    let a = n;
    while (a >= k) {
        a -= k;
        sum += 1;
        a += 1;
    }
    output += `${sum}\n`;

}
console.log(output);