let [NJ, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, J] = NJ.split(' ').map(x=>+x);
input = input.split(' ').map(x=> Math.abs(x - J));

let output = input[0];
for (let i = 1; i < N; ++i) {
    output = euclid(output, input[i]);
    if (output === 1) break;
}
console.log(output);

function euclid(a, b) {
    [a, b] = [Math.max(a, b), Math.min(a,b)];
    while (b > 0) {
        [a,b] = [b, a%b]
    };
    return a
}