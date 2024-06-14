let [RC, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [R, C] = RC.split(' ').map(Number);

let [left, right] = [0, R-1];

let newInput = new Array(C);
for (let c = 0; c < C; ++c) {
    let str = '';
    for(let r = 0; r < R; ++r) {
        str += input[r][c];
    }
    newInput[c] = str;
}

let max = 0;
while (left <= right) {
    let mid = Math.floor((left+right) / 2);

    let set = new Set();
    let isOK = true;
    for (let c = 0; c < C; ++c) {
        const str = newInput[c].substr(mid);
        if (set.has(str)) {
            isOK = false;
            break;
        }
        set.add(str);
    }
    if (isOK) {
        max = Math.max(max, mid);
        left = mid + 1;
    } else right = mid - 1;
}
console.log(max);