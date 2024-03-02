let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;
let output = new Array(T);
let k = 0;
for (let t = 0; t < T; ++t) {
    let I = +input[k++];
    let target = [];
    for (let i = 0; i < I; ++i, ++k) {
        target.push(input[k].split(' ').map(Number));
    }

    //1
    target.sort((a,b) => a[0] - b[0]);
    let sum = 1;
    let min = target[0][1];
    for (let i = 1; i < I ; ++i) {
        let a = target[i][1]
        if (min > a) {
            min = a;
            sum++;
        }
    }
    output[t] = sum;
}
console.log(output.join('\n'))