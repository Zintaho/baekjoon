let [XN, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [X, N] = XN.split(' ').map(x=>+x);
input = input.split(' ').map(x=>+x);
let count = 1;
let sum = input.slice(0, N).reduce((a,b) => a+b);
let max = sum;
for (let i = N; i < X; ++i) {
    sum += input[i]; 
    sum -= input[i-N];
    if (sum === max) count++;
    else if (sum > max) {
        count = 1;
        max = sum;
    }
}
if (max === 0) console.log("SAD");
else console.log(`${max}\n${count}`);
