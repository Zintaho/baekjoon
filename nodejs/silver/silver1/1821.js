let [N, F] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

// 계수 구하기
let coef = new Array(N).fill(1);
for (let n = 2; n < N; ++n) {
    let temp = new Array(N).fill(1);
    for (let m = 1; m < n; ++m) {
        temp[m] = coef[m-1] + coef[m];
    }
    for (let m = 1; m < n; ++m) {
        coef[m] = temp[m];
    }
}

// 순열 사용하여 항 구하기
const nth_perm = function(array, n) {
    let arr = [...array];
    let len = arr.length;
    let f = 1;
    for (let i = 2; i<=len; ++i) f*=i;

    let temp = [];
    if (n >= 0 && n < f) {
        for (;len > 0; len--) {
            f /= len;
            let i = Math.floor(n/f);
            n %= f;
            temp.push(arr[i]);
            arr.splice(i,1);
        }
    }
    return temp;
}
let M = 1;
for (let i = 2; i<=N; ++i) M*=i;

let ks = new Array(N).fill(1);
for (let n = 2; n <= N; ++n) ks[n-1] = n;

for (let m = 0; m < M; ++m) {
    let sum = 0;
    let p = nth_perm(ks, m);
    for (let n = 0; n < N; ++n) {
        sum += (coef[n] * p[n]);
    }
    if (sum === F) {
        console.log(p.join(' '));
        break;
    }
}
