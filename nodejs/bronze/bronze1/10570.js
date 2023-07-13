let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let k = 0;
let output = new Array(+N);
for (let i = 0; i <+N; ++i) {
    let V = +input[k++];

    let nums = input.slice(k, k+V);
    let freqs = new Array(1001).fill(0);
    k+=V;
    
    let max = 0;
    let result;
    nums.forEach((x) => {
        x = +x;
        freqs[x]++;
        if (freqs[x] > max) {
            result = x;
            max = freqs[x];
        } else if (freqs[x] === max && result > x) {
            result = x;
        }
    });

    output[i] = result;
}
console.log(output.join('\n'));