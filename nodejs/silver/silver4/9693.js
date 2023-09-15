let [...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let N = input.length-1;
let output = new Array(N);
for (let i = 0; i < N; ++i) {
    let n = input[i];
    let fives = [];
    let [k, K] = [5, 5];
    while( k <= n) {fives.push(k); k *= K};
    let sum = 0;
    for (let five of fives) {
        sum += Math.floor(n / five);
    }
    output[i] = `Case #${i+1}: ${sum}`;
}
console.log(output.join('\n'))