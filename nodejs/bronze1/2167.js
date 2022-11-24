let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,M] = input[0].split(' ').map(x=>parseInt(x, 10));
let arr = new Array(N);
for (let n = 0; n <N; ++n) {
    let nums = input[n+1].split(' ').map(x=>parseInt(x, 10));
    arr[n] = nums;
}
let K = +input[N+1];
let output = '';
for (let k = N+2; k < N+K+2; ++k) {
    let [i,j,x,y] = input[k].split(' ').map(x=>parseInt(x, 10)-1);

    let sum = 0;
    for (let a = i; a <= x; ++a) {
        for (let b = j; b <= y; ++b) sum += arr[a][b];
    }

    output += `${sum}\n`;
}
console.log(output);