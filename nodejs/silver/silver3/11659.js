let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,M] = input[0].split(' ').map(x=>+x);
let nums = `0 ${input[1]}`.split(' ').map(x=>+x);
for (let n = 1; n <= N; ++n) nums[n] += nums[n-1];
input = input.slice(2);
let output = new Array(M);
for (let m = 0; m < M; ++m) {
    let [a,b] = input[m].split(' ').map(x=>+x);
    output[m] =  nums[b] - nums[a-1];
}
console.log(output.join('\n'));