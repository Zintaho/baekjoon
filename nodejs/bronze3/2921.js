let N = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
let memo = new Array(N).fill(3);
for (i = 2; i <= N; ++i) {
    memo[i-1] = (i*(i+1)/2)*3;
}
console.log(memo.reduce((a,b)=> a+b));