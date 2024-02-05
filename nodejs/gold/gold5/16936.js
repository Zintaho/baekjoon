let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(BigInt);

let result = [];
for (let n = 0; n < N; ++n) {
    let a = input[n];
    let set = new Set(input);
    dfs(a, set, [a]);
    if (result.length === N) {
        console.log(result.join(' '));
        break;
    }
}

function dfs(a, check, arr) {
    check.delete(a);
    if (check.size === 0) {
        result = arr;
    } else {
        if (check.has(a * 2n)) dfs(a * 2n, new Set(check), [...arr, a * 2n]);
        if (a % 3n === 0n && check.has(a / 3n)) dfs(a / 3n, new Set(check), [...arr, a / 3n]);
    }
}