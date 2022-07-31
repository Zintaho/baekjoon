let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input[0]
let N = input.length;
let output = Array(N);
for (i = 0; i< N; ++i) {
    output[i] = input[N - (i+1)];
}
console.log(output.join(''));