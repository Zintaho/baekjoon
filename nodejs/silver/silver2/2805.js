let [NM, trees] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
M = +M;

trees = trees.split(' ').map(x=>+x);
let [start, end] = [0, Math.max(...trees)];
let mid;

let lastsum = -1;
while ((start + 1) <= end) {
    mid = Math.floor((end+start)/2);

    let sum = 0;
    for (let i = 0 ; i < +N; ++i) {
        let k = trees[i] - mid;
        if (k > 0) sum += k;
    }

    if (sum > M) start = mid;
    else if (sum < M) end = mid;
    else if (sum === M) break;

    if (lastsum === sum) break;
    lastsum = sum;
}
console.log(mid);