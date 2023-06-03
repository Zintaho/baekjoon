let [R, C, W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
let arr = new Array(R+W-1).fill(0);

for (let i = 0; i < arr.length; ++i) {
    arr[i] = new Array(i+1);
    arr[i][0] = 1;
    for (let j = 1; j < i; ++j) {
        arr[i][j] = arr[i-1][j-1] + arr[i-1][j]
    }
    arr[i][i] = 1;
}
let sum = 0;
for (let i = (R-1), k = (C-1); i < (R+W-1); ++i, ++k) {
    for (let j = (C-1); j < k+1; ++j) {
        sum += arr[i][j];
    }
}
console.log(sum);