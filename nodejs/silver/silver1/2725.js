let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let max = Math.max(...input);
let dp = new Array(max+1).fill(0); // 수직하는 3개 점은 제외하고 계산?
dp[1] = 3;
for (let i = 2; i <= max; ++i) {
    let cnt = 0;
    for (let j = 1; j < i; ++j) {
        let r = euclid(i, j);
        if (r === 1) cnt++;
    }
    dp[i] = dp[i-1] + cnt * 2;
}

let output = new Array(T);
for (let t = 0; t< T; ++t) {
    output[t] = dp[input[t]];
}

function euclid(a, b) {
    [a,b] = [Math.max(a,b), Math.min(a,b)];
    
    let r = a%b;
    while (r > 0) {
        [a,b] = [b,r];
        r = a%b;
    }

    return b;
}

console.log(output.join('\n'));