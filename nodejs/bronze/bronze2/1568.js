let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let sec = 0;
let K = 1;
while (N > 0) {
    if (K > N) {
        K = 1;
        continue;
    } else {
        sec ++;
        N -= K++;
    }
}
console.log(sec);