let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

let max = 0;
input.sort((a,b) => a-b).forEach((x, i) => {
    let k = x * (N-i);
    if (max < k) max = k;
});
console.log(max);