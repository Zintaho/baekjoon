let [MNH, ..._board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [M, N, H] = MNH.split(' ').map(Number);
let newBoard = Array.from({length : H}, () => 
    Array.from({length: N}, () => 
        Array.from ({length : M}, () => 0)
    )
);
let rests = 0;
let queue = [];
for (let h = 0; h < H; ++h) {
    for (let n = 0; n < N; ++n) {
        newBoard[h][n] = _board[n + N*h].split(' ').map(Number);
        for (let m = 0; m < M; ++m) {
            if (newBoard[h][n][m] === 1) queue.push([h, n, m]);
            else if (newBoard[h][n][m] === 0) rests++;
        }
    }
}
let min = bfs();
console.log(rests===0?min:-1);

function bfs() {
    let depth = 0;
    if (rests === 0) return depth;

    let seq = [ //z, y x
        [-1, 0, 0], [1, 0, 0], [0, -1, 0], [0, 1, 0], [0, 0, -1], [0, 0, 1]
    ];

    let board = newBoard;
    let [start, end] = [0, queue.length]
    while (start < end) {
        for (let i = start; i < end; ++i) {
            [zz, yy, xx] = queue[i];
            board[zz][yy][xx] = 1;
    
            for (let s of seq) {
                let [zzz, yyy, xxx] = [zz+s[0], yy+s[1], xx+s[2]];
                if (0 <= zzz && zzz < H && 0 <= yyy && yyy < N && 0 <= xxx && xxx < M && board[zzz][yyy][xxx] === 0) {
                    board[zzz][yyy][xxx] = 1;
                    rests--;
                    if (rests === 0) return depth+1;

                    queue.push([zzz, yyy, xxx]); 
                }
            }
        }
        depth++;
        start = end;
        end = queue.length;
    } 

    return depth - 1;
}