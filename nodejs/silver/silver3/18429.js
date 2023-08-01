let [NK, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, K] = NK.split(' ').map(x=>+x);
input = input.split(' ').map(x=>+x -K);
let cnt = 0;
all_permutation(N, N);
console.log(cnt);

// 브루트포스가 아닌 백트래킹으로 풀어야.

function all_permutation(n, r, checked=new Array(n).fill(false), row=[]) {
    if (r === row.length) {
        let sum = 0;
        let isOK = true;
        for (let k of row) {
            sum += input[k-1];
            if (sum < 0) {
                isOK = false;
                break;
            }
        }
        if (isOK) cnt++;
        
        return;
    }
    for (let i = 0; i < n; ++i) {
        let checkedCopied = [...checked];
        let copied = [...row, i+1];

        if ( checkedCopied[i] === false) {
            checkedCopied[i] = true;
            all_permutation(n, r, checkedCopied, copied);
        }
    }
}