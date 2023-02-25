let [N,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(N);
for (let n = 0; n < N; ++n) {
    let pw = input[n];
    let K = Math.sqrt(pw.length);
    let temp = new Array(pw.length);
    let i = 0;
    for (let k = K; k > 0 ; --k) {
        for (let j = 0 ; j < K; ++j) {
            let c = pw.charAt(j*K + k - 1);
            temp[i++] = c;
        }
    }
    output[n] = temp.join('');
}
console.log(output.join('\n'))