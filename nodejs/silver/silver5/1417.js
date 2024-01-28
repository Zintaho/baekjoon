let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let target = +input[0];
input = input.slice(1).map(Number);

let sum = 0;
if (input.length > 0) {
    input.sort((a,b) => b-a);
    while (target <= input[0]) {
        target++;
        input[0]--;
        sum++;
        input.sort((a,b) => b-a);
    }
}

console.log(sum);