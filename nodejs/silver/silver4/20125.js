let [N, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
board.forEach((x, i) => board[i] = x.split(''));

// 심장찾기
let [hY, hX] = findHeart();
function findHeart() {
for (let y = 0 ; y < N; ++y) {
    for (let x = 0; x < N; ++x) {
        let a = board[y][x];
        if (a === '*') {
            return [y+1, x];
        }
    }
}
}
console.log(hY+1, hX+1);

//왼팔
let lA = 0;
for (let x = hX-1; x >=0; --x) {
    if (board[hY][x] !== '*') break;
    lA++;
}

//오른팔
let rA = 0;
for (let x = hX+1; x < N; ++x) {
    if (board[hY][x] !== '*') break;
    rA++;
}

//허리
let w = 0;
for (let y = hY+1; y < N; ++y) {
    if (board[y][hX] !== '*') break;
    w++;
}
//왼다리
let lL = 0;
for (let y = hY+w+1; y < N; ++y) {
    if (board[y][hX-1] !== '*') break;
    lL++;
}
//오른다리
let rL = 0;
for (let y = hY+w+1; y < N; ++y) {
    if (board[y][hX+1] !== '*') break;
    rL++;
}

console.log(lA, rA, w, lL, rL);