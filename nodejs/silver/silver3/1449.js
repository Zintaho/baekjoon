let [NL, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, L] = NL.split(' ').map(x=>+x);

input = input.split(' ').map(x=>+x);
input.sort((a,b) => a-b);

let cnt = 0;
let l = L;
for (let n = 0; n < N-1; ++n) {
    let d = input[n+1] - input[n];
    l -= d;
    if (l <= 0) {
        cnt++;
        l = L;
    }
}
if (l <= L) cnt++;
console.log(cnt);