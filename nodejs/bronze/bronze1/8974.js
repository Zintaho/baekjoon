let [A,B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let sums = new Array(B+1);
sums[0] = 0;
sums[1] = 1;
let a = 2;

for (let i = 2; ; ++i) {
    for (let j = 0; j < i; ++j) {
        if (a === B+1) break;
        sums[a] = i + sums[a-1];
        a++;
    }
    if (a === B+1) break;
}
console.log(sums[B] - sums[A-1]);