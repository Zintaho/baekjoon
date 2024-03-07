let [NM, ..._board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
let _queue = [];
let _zeros = [];
_board.forEach((x, i) => {
    _board[i] = x.split(' ').map(Number);
    for (let j = 0; j < M; ++j) {
        let a = _board[i][j];
        switch(a) {
            case 2:
                _queue.push([i, j]);
                break;
            case 0:
                _zeros.push([i, j]);
                break;
        }
    }
});

let LEN = _zeros.length;
let max = 0;
for (let a = 0; a < LEN - 2; ++a) {
    for (let b = a+1; b < LEN -1; ++b) {
        for (let c = b+1; c < LEN; ++c) {
            let walls = [_zeros[a], _zeros[b], _zeros[c]];
            max = Math.max(max, bfs(_board, _queue, walls));
        }
    }
}
console.log(max);

function bfs(_board, _queue, _walls) {
    let seq = [
        [-1, 0], [0, -1], [1, 0], [0, 1]
    ];

    let board = Array.from({length: N}, _ => new Array(M).fill(0));
    _board.forEach((x, i) => {
        board[i] = [...x];
    });

    for (let wall of _walls) {
        let [y, x] = wall;

        board[y][x] = 1;
    }

    let rest = _zeros.length - 3;

    let queue = [..._queue];
    while (queue.length > 0 ) {
        let newQueue = [];
        let I = queue.length;
        for (let i = 0; i < I; ++i) {
            [yy, xx] = queue.pop();
            board[yy][xx] = 2;
    
            for (let s of seq) {
                let [yyy, xxx] = [yy+s[0], xx+s[1]];
                if (0 <= yyy && yyy < N && 0 <= xxx && xxx < M && board[yyy][xxx] === 0) {
                    board[yyy][xxx] = 2;
                    rest--;

                    newQueue.push([yyy, xxx]); 
                }
            }
        }
        queue = newQueue;
    } 

    return rest;
}