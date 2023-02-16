let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let answer = -1;
for (let i = Math.floor(N/5); i>=0; --i) {
    let J = N - 5*i;
    if (J%2===0) {
        answer = i + J/2;
        break;
    }
}
console.log(answer);