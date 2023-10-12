let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = new Array(T);
for (let t = 0, k = 0; t < T; ++t) {
    let [H, W] = input[k++].split(' ').map(x=>+x);
    let board = new Array(H);
    for (let h = 0 ; h < H; ++h) {
        input[k] = input[k].split('');
        board[h] = input[k++];
    }

    let count = 0;
    for (let h = 0; h < H; ++h){
        for (let w = 0; w < W; ++w) {
            let a = board[h][w];
            if (a === '#') {
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

    if (board[h][w] === '#') {
        board[h][w] = '.';
        fill(board, h+1, w, H, W);
        fill(board, h, w+1, H, W);
        fill(board, h-1, w, H, W);
        fill(board, h, w-1, H, W);
    } else {
        return;
    }
}