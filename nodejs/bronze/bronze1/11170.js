let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;
let output = new Array(T+2);
let max = 0;
for (let t= 0; t < T; ++t) {
    input[t] = input[t].split(' ').map(x=>+x);
    max = Math.max(max, input[t][1]);
}
let zeros = new Array(max+1);
zeros[0] = 0;
let cnt = 1;
for (let z = 1; z <= max+1; ++z) {
    let Z = z-1;
    while (Z > 0) {
        let k = Z % 10;
        if (k === 0) cnt++;
        Z = (Z-k) / 10;
    }
    zeros[z] = cnt;
}
for (let t = 0; t < T; ++t) {
    let [a,b] = input[t];
    output[t] = zeros[b+1] - zeros[a];
}
console.log(output.join('\n'));