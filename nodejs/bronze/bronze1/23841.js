let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>+x);
let board = new Array(N).fill(0).map(x=>new Array(M).fill('.'));
for (let y = 1; y <= N; ++y) {
    for (let x = 0; x < M/2; ++x) {
        let l = input[y].charAt(x);
        let r = input[y].charAt(M-x-1);
        let a = '.';
        if (l!=r) {
            if (l === '.') {
                a = r;
            } else if (r === '.') {
                a = l;
            }
        }
        board[y-1][x] = a;
        board[y-1][M-x-1] = a;
    }
}
console.log(board.map(x=>x.join('')).join('\n'));