let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = new Array(T);
for (let t = 0, i = 0; t < T; ++t) {
    let [W, H, K] = input[i++].split(' ').map(x=>+x);
    let board = Array.from({length:H}, _ => new Array(W).fill(0));
    for (let k = 0 ; k < K; ++k, ++i) {
        let [x, y]= input[i].split(' ').map(x=>+x);
        board[y][x] = 1;
    }

    let count = 0;
    for (let h = 0; h < H; ++h){
        for (let w = 0; w < W; ++w) {
            let a = board[h][w];
            if (a === 1) {
                count++;
                fill(board, h, w, H, W);
            }
        }
    }
    output[t] = count;
}
console.log(output.join('\n'));

function fill(board, h, w, H, W) {
    if (h < 0 || w < 0 || h >= H || w >= W ) return;

    if (board[h][w] === 1) {
        board[h][w] = 0;
        fill(board, h+1, w, H, W);
        fill(board, h, w+1, H, W);
        fill(board, h-1, w, H, W);
        fill(board, h, w-1, H, W);
    } else {
        return;
    }
}