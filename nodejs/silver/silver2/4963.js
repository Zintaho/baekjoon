let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let k = 0;
let output = [];
while (true) {
    let [W,H] = input[k++].split(' ').map(x=>+x);
    if (W*H === 0) break;
    
    let board = new Array(H);

    for (let i = 0; i < H; ++i) {
        input[k] = input[k].split(' ');
        board[i] = input[k++];
    }

    let count = 0;
    for (let h = 0; h < H; ++h){
        for (let w = 0; w < W; ++w) {
            let a = board[h][w];
            if (a === '1') {
                count++;
                fill(board, h, w, H, W);
            }
        }
    }

    output.push(count);
}
console.log(output.join('\n'));

function fill(board, h, w, H, W) {
    if (h < 0 || w < 0 || h >= H || w >= W ) return;

    if (board[h][w] === '1') {
        board[h][w] = '0';
        fill(board, h+1, w, H, W);
        fill(board, h, w+1, H, W);
        fill(board, h+1, w+1, H, W);
        fill(board, h+1, w-1, H, W);
        fill(board, h-1, w, H, W);
        fill(board, h, w-1, H, W);
        fill(board, h-1, w-1, H, W);
        fill(board, h-1, w+1, H, W);
    } else {
        return;
    }
}