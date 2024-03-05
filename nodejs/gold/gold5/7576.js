let [MN, ..._board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [M, N] = MN.split(' ').map(Number);
_board = _board.map(x=>x.split(' ').map(Number));

let queue = [];
let rests = Array.from({length : N}, _ => new Array(M).fill(1));
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        if (_board[n][m] === 1) queue.push([n, m]);
        else if(_board[n][m] === -1) rests[n][m] = 0;
    }
}

let min = bfs();
let isOK = check();
console.log(isOK?min:-1);

function check() {
for (let n = 0; n < N; ++n) {
    for (let m = 0 ; m < M; ++m) {
        if (rests[n][m] !== 0) return false;
    }
}
return true;
}

function bfs() {
    let depth = 0;
    let seq = [
        [-1, 0], [0, -1], [1, 0], [0, 1]
    ];

    let board = Array.from({length: N}, _ => new Array(M).fill(0));
    _board.forEach((x, i) => {
        board[i] = [...x];
    });

    while (queue.length > 0 ) {
        let newQueue = [];
        let I = queue.length;
        for (let i = 0; i < I; ++i) {
            [yy, xx] = queue.pop();
            board[yy][xx] = 1;
            rests[yy][xx] = 0;
    
            for (let s of seq) {
                let [yyy, xxx] = [yy+s[0], xx+s[1]];
                if (0 <= yyy && yyy < N && 0 <= xxx && xxx < M && board[yyy][xxx] === 0) {
                    board[yyy][xxx] = 1;
                    rests[yyy][xxx] = 0;

                    newQueue.push([yyy, xxx]); 
                }
            }
        }
        queue = newQueue;
        depth++;

    } 

    return depth - 1;
}