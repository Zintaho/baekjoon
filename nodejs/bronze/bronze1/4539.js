let [N, ...inputs] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let output = new Array(N);
for (let n = 0; n < N; ++n) {
    let input = +inputs[n];
    let k = 10;
    while(input >= k) {
        let a = input%k;
        if (a >= k/2) input += (k - a);
        else input -= a;
        k *= 10;
    }
    output[n] = input;
}
console.log(output.join('\n'));
