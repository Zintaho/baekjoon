let [NM, ..._board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
_board = _board.map(x=>x.split(''));

let max = 0;
for (let n = 0; n < N; ++n) {
    for (let m = 0; m < M; ++m) {
        if (_board[n][m] !== 'W') {
            max = Math.max(max, bfs(n, m))
        }
    }
}

console.log(max);

function bfs(y, x) {
    let queue = [[y, x]];
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
            board[yy][xx] = depth;
    
            for (let s of seq) {
                let [yyy, xxx] = [yy+s[0], xx+s[1]];
                if (0 <= yyy && yyy < N && 0 <= xxx && xxx < M && board[yyy][xxx] === 'L') {
                    board[yyy][xxx] = depth;
                    newQueue.push([yyy, xxx]); 
                }
            }
        }
        queue = newQueue;
        depth++;

    } 

    return depth - 1;
}