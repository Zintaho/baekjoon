let [RCK, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C, K] = RCK.split(' ').map(Number);

board.forEach((x, i) => {
    board[i] = x.split('');
});

let count = 0;
dfs(R-1, 0);
console.log(count);

function dfs(y, x, checkmask = 0, k=0) {
    let b = y*C + x;
    checkmask |= (1 << b);

    if (k === K-1 && y === 0 && x === C-1) {
        count++;
        return;
    }

    let seq = [
        [+1, 0], [-1, 0], [0, +1], [0, -1]
    ];
    for (let [dy, dx] of seq) {
        let [yy, xx] = [y+dy, x+dx];
        if (0<=yy&& yy < R && 0 <= xx && xx < C && board[yy][xx] !== 'T') {
            let bb = yy*C + xx;
            if ((checkmask & (1 << bb)) > 0) continue;
            dfs(yy, xx, checkmask, k+1);
        } 
    }
}