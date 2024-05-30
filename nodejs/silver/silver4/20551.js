let [NM, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let arr = input.slice(0, N).map(Number);
let questions = input.slice(N, N+M).map(Number);
arr.sort((a,b) => a-b);

let output = new Array(M);
for (let m = 0; m < M; ++m) {
    let Q = questions[m];
    let [left, right] = [0, arr.length - 1];
    let A = -1;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let M = arr[mid];
        if (Q === M) {
            A = mid;
            right = mid - 1;
        } else if (Q < M) right = mid - 1;
        else if (Q > M) left = mid + 1;
    }
    output[m] = A;
}
console.log(output.join('\n'));