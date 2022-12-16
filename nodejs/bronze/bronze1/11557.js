let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let T = +input[0];
let i = 1;
let output = '';
for (let t = 0; t < T; ++t) {
    let N = +input[i++] + i;

    let [maxU, max] = ['', 0];
    for (i; i < N; ++i) {
        let [u, k] = input[i].split(' ');
        k = +k;
        if (k > max) {
            maxU = u;
            max = k;
        }
    }
    output += `${maxU}\n`;
}
console.log(output);