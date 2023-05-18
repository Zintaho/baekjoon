let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let count = 0;
for (let i = N- 1; i > 0 ;--i) {
    let [a,b] = [input[i], input[i-1]];
    if ( b < a) continue
    
    let k = (b-a) + 1;
    count += k;
    input[i-1] = b-k;
}
console.log(count);