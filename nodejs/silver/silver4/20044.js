let [n, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
n = +n;
input = input.split(' ').map(x=>+x)
input.sort((a,b) => a-b);

let min = 200001;
for (let i = 0; i < n; ++i) {
    min = Math.min(min, (input[i] + input[input.length - i - 1]));
}
console.log(min);