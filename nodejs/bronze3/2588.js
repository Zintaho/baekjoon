let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let A = parseInt(input[0], 10);
for (i = 2; i >= 0 ; --i) {
    let c = input[1][i];
    console.log(A * parseInt(c, 10));
}
console.log(A*parseInt(input[1], 10));
