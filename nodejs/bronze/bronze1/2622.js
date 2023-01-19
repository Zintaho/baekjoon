let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let sum = 0;
if (N > 2) {
    for (let c = parseInt((N-1)/2); c >= Math.ceil(N/3); --c) {
        let k = N - c;
        sum += (c - Math.ceil(k/2)) + 1;
    }
}
console.log(sum);