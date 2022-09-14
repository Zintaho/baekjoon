let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, W, H] = input[0].split(' ').map(x=>parseInt(x, 10));
let k = Math.sqrt(W*W+H*H);
let output = '';
for (let i = 1; i <= N; ++i) {
    output += k < parseInt(input[i], 10)? 'NE\n' : 'DA\n';
}
console.log(output);