let N = +require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
console.log(nqueen(N));

function nqueen(n) {
    let count = 0;
    board=new Array(n).fill().map(_=>new Array(n).fill(0));

    next();
    return count;

    function put(Y, X, board, k = 1) {
        board[Y][X] = k;
    }
    function check(Y, X) {
        for (let x= 0; x < n; ++x) {
            if (board[Y][x] === 1) return false;
            let d = Math.abs(X-x);
            if (Y - d >= 0 && board[Y - d][x] === 1) return false;
            if (Y + d < n && board[Y + d][x] === 1) return false;
        }

        return true;
    }
    function next(X = 0) {
        if (X === n) {
            count++;
            return;
        }
        for (let y = 0; y < n; ++y) {
            if (check(y, X)) {
                put(y, X, board, 1);
                next(X+1, board);
                put(y, X, board, 0);
            }
        }
        return;
    }
}