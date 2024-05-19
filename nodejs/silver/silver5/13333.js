let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(Number);
input.sort((a,b ) => b-a);
getResult();
function getResult() {
for (let k = 1; k <= N; ++k) {
    if (input[k-1] < k) {
        console.log(k-1);
        return;
    }
}
console.log(N);
}