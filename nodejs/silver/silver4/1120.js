let [a,b]= require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [aLen, bLen] = [a.length, b.length];
if (aLen >= bLen) console.log(diffCheck(a,b));
else console.log(diffCheck(b,a));

function diffCheck(a, b) {
    // a >= b
    let min = 51;
    for (let i = 0; i <= a.length - b.length; ++i) {
        let count = 0;
        const aSub = a.substring(i, i + b.length);
        for (let j = 0; j < b.length; ++j) {
            if (aSub[j] !== b[j]) count++;
        }
        min = Math.min(min, count);
    }
    return min;
}