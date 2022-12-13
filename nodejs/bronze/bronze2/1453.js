let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let pc = new Array(100).fill(0);
let sum = 0;
let customers = input[1].split(' ').map(x=>parseInt(x, 10) - 1);
for (let i = 0; i < N; ++i) {
    let k = customers[i];
    if (pc[k]) sum++;
    else pc[k] = 1;
}
console.log(sum);