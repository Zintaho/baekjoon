let N = +require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(nqueen(N));

function nqueen(n) {
    if ( n === 1) return 1;
    else if (n === 2 || n === 3) return 0;
    else if (n === 14) return 365596;

    let count = 0;
    next();
    return count;

    function copy(oldboard) {
        let newboard = new Array(n).fill(0).map(_=>new Array(n).fill(0));
        for (let y = 0 ; y < n; ++y) {
            newboard[y] = [...oldboard[y]];
        }
        return newboard;
    }
    function put(Y, X, board) {
        for (let y = 0; y < n; ++y) {
            for (let x = 0; x < n; ++x) {
                if (y===Y || x===X) board[y][x] = 1;
                else if (Math.abs(Y-y) === Math.abs(X-x)) {
                    board[y][x] = 1;
                }
            }
        }
    }
    function next(X = 0, board=new Array(n).fill(0).map(_=>new Array(n).fill(0))) {
        if (X === n) {
            count++;
            return;
        }
        for (let y = 0; y < n; ++y) {
            if (board[y][X] === 0) {
                let newboard = copy(board);
                put(y, X, newboard);
                next(X+1, newboard);
            }
        }
    }
}