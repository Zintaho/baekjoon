let [N, sequence] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
sequence = sequence.split(' ').map(Number);

let min = 1000000001;
let minI = -1;

let result = 0;

for (let i = 0; i < sequence.length; ++i) {
    let s = sequence[i];
    if (s < min) {
        min = s;
        minI = i;
    } 

    result = Math.max(result, s-min);
}
console.log(result);