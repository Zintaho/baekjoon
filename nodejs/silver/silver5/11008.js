let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = new Array(N);
for (let i = 1; i<=N; ++i) {
    let [s,p] = input[i].split(' ');
    s = s.replaceAll(p, 'a');
    output[i-1] = s.length;
}
console.log(output.join('\n'));