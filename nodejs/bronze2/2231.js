let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let k = 0;
for (let i = N - (9*N.toString().length); i <= N; ++i) {
    let sum = i + i.toString().split('').map(x=>parseInt(x, 10)).reduce((a,b)=>a+b);
    if (sum === N) {
        k = i;
        break;
    }
}
console.log(k);