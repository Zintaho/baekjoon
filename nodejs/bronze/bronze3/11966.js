let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let k = 1;
let answer = 0;
while (N >= k) {
    if (N === k) {
        answer = 1;
        break;
    }
    k *= 2;
}
console.log(answer);