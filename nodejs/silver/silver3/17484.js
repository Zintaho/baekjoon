let [NM, ...board] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
board.forEach((x, i) => board[i] = x.split(' ').map(Number));

let sequences = [];
get();
sequences = sequences.map(x => x.split('').map(y=>y-1));

let min = 600;
for (let m = 0; m < M; ++m) {
    for (let seq of sequences) {
        let x = m;
        let arr = [];
        let sum = board[0][x];
        arr.push(sum);

        let isValid = true;
        for (let y = 1; y < N; ++y) {
            let d = seq[y-1];
            let next = x + d;

            if (0 <= next && next < M) {
                x = next;

                sum += board[y][x];
                arr.push(board[y][x])

            } else {
                isValid = false;
                break;
            }
        }
        if (!isValid) continue;

        min = Math.min(sum, min);
    }
}
console.log(min);

function get(last=-1, full='') {
    if (full.length === N-1) {
        sequences.push(full);
        return;
    }

    if (last !== 0) get(0, `${full}${0}`);
    if (last !== 1) get(1, `${full}${1}`);
    if (last !== 2) get(2, `${full}${2}`);
}