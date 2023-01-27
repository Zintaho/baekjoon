let [N,R,C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let ab = 'v.'.repeat(N+1);
let arr = [ab.substring(0,N), ab.substring(1,N+1)];

let k = 0;
if (C%2 != R%2) k = 1;

let output = '';
for (let n = 0; n < N; ++n) {
    output += `${arr[k]}\n`;
    k = (k+1)%2;
}
console.log(output);