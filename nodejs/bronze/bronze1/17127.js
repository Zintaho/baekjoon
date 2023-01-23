let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x);
const merge = (arr, a, b, c) => {
    let sum = 0;
    sum += arr.slice(0,a).reduce((x,y) => x*y);
    sum += arr.slice(a,b).reduce((x,y) => x*y);
    sum += arr.slice(b,c).reduce((x,y) => x*y);
    sum += arr.slice(c,N).reduce((x,y) => x*y);
    return sum;
};
let max = 0;
for (let a=1 ; a <= N-3; ++a) {
    for (let b=a+1; b<=N-2; ++b) {
        for (let c=b+1; c<=N-1; ++c) {
            max = Math.max(max, merge(input,a,b,c));
        }
    }
}
console.log(max);