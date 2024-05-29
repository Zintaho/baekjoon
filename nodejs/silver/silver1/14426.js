let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let strings = input.slice(0, N);
let cases = input.slice(N, N+M);
strings.sort();

let sum = 0;
for (let m = 0; m < M; ++m) {
    let [left, right] = [0, strings.length-1];
    let CASE = cases[m];
    let reCheck = new RegExp(`^${CASE}`, 'g');
    while (left <= right) {
        let mid = Math.floor((left+right) / 2);
        let s = strings[mid];
        if (s.match(reCheck)) {
            sum++;
            break;
        } else {
            if (s < CASE) {
                left = mid + 1;
            } else if (CASE < s) {
                right = mid - 1;
            }   
        }
    }
}
console.log(sum);