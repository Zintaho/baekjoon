let [NM, snacks] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
snacks = snacks.split(' ');

let [left, right] = [1, 0];
snacks.forEach((x, i) => {
    x= +x;
    snacks[i] = x;
    right = Math.max(right, x);
});

let result = 0;
while (left <= right) {

    let mid = Math.floor((left+right) / 2);
    let b = get(mid);

    if (b < N) {
        right = mid - 1;
    } else {
        if (result < mid) result = mid;
        left = mid + 1;
    }
}
console.log(result);

function get(a) {
    let cnt = 0;
    snacks.forEach((x) => {
        cnt += Math.floor(x / a);
    })
    return cnt;
}
