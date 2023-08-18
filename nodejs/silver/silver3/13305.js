let [N, dArr, cArr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
dArr = dArr.split(' ').map(x=>BigInt(x));
cArr = cArr.split(' ').map(x=>BigInt(x));

let a = 1_000_000_000n;
let sum = 0n;
for (let i = 0; i < N-1; ++i) {
    let [D, B] = [dArr[i], cArr[i]];
    let [sA, sB] = [a*D, B*D];
    if (sA < sB) {
        sum += sA;
    } else {
        sum += sB;
        a = B;
    }   
}

console.log(sum.toString());