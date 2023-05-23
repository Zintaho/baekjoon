let [RC, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C] = RC.split(' ').map(x=>+x);
let T = +input.splice(R, 1)[0];
input.forEach((x,i) => {input[i] = x.split(' ').map(x=>+x)});
let sum = 0;
for (let y = 0; y < R-2; ++y) {
    for (let x = 0; x < C-2; ++x) {
        let arr = new Array(9);
        for (let b = 0; b < 3; ++b) {
            for (let a = 0;  a< 3; ++a) {
                arr[b*3 + a] = input[y+b][x+a];
            }
        }
        arr.sort((a,b) => a-b);
        sum += (T <= arr[4])?1:0;
    }
}
console.log(sum);