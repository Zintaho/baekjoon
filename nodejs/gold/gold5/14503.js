let [NM, rcd, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let [r, c, d] = rcd.split(' ').map(Number);
board.forEach((x, i) => board[i] = x.split(' ').map(Number));

let count = 0;
let sequence = [
    [-1, 0], [0, 1], [1, 0], [0, -1] 
];
while ( true ) {
    // 1
    if (board[r][c] === 0) {
        board[r][c] = 2;
        count++;
        continue;
    }
    // 2
    let rest = 4;
    for (let seq of sequence) {
        let rrcc = getNext(r, c, seq);
        if (rrcc === null) continue;

        let [rr,cc] = rrcc;
        if (board[rr][cc] !== 0) rest--;
    }
    if (rest === 0) {
        let rrcc = getNext(r, c, sequence[d].map(x=>x*-1));
        if (rrcc === null) break;

        let [rr, cc] = rrcc;
        if (board[rr][cc] === 1) break;
        else {
            [r, c] = [rr, cc];
            continue;
        }
    }
    // 3
    else {
        d= (d + 3) % 4;
        let rrcc = getNext(r, c, sequence[d]);
        if (rrcc === null) continue;

        let [rr, cc] = rrcc;
        if (board[rr][cc] === 0) {
            [r, c] = [rr, cc];
            continue;
        }
    }
}

function getNext(r, c, seq) {
    let [rd, cd] = seq;
    let [rr, cc] = [r+rd, c+cd];
    if (0 <= rr && rr < N && 0 <= cc && cc < M) {
        return [rr, cc];
    } else return null;
}

console.log(count);