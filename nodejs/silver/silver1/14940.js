let [NM, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(Number);
board = board.map(x=>x.split(' ').map(Number));

let check = Array.from({length :N} , _ => new Array(M).fill(0));

let [Y, X] = [0, 0];

for (let n = 0; n < N ; ++n) {
    for (let m = 0; m < M; ++m) {
        if (board[n][m] === 2) {
            [Y, X ] = [n, m]
        } else if (board[n][m] === 1) {
            board[n][m] = -1;
        }
    }
}


bfs(Y, X)
board = board.map(x=>x.join(' '));
console.log(board.join('\n'));


function bfs(y, x) {
    let queue = [[y, x]];
    let depth = 0;
    let seq = [
        [-1, 0], [0, -1], [1, 0], [0, 1]
    ];

    while (queue.length > 0 ) {
        let newQueue = [];
        let I = queue.length;
        for (let i = 0; i < I; ++i) {
            [yy, xx] = queue.pop();
            board[yy][xx] = depth;
    
            for (let s of seq) {
                let [yyy, xxx] = [yy+s[0], xx+s[1]];
                if (0 <= yyy && yyy < N && 0 <= xxx && xxx < M && check[yyy][xxx] === 0 && board[yyy][xxx] === -1) {
                    check[yyy][xxx] = 1;
                    newQueue.push([yyy, xxx]); 
                }
            }
        }
        queue = newQueue;
        depth++;
    } 
}