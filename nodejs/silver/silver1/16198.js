let [N, arr] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
arr = arr.split(' ').map(Number);

let max = 0;
bt();
console.log(max);

function bt(sum = 0, now = [...arr]) {
    if (now.length === 2) {
        max = Math.max(max, sum);
        return;
    }

    for (let i = 1; i < now.length - 1; ++i) {
        bt(sum + (now[i-1] * now[i+1]), [...now.slice(0, i), ...now.slice(i+1)]);
    }
}