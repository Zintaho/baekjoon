let [HW, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [H, W] = HW.split(' ').map(x=>+x);
let board = new Array(H);
for (let h = 0 ; h < H; ++h) {
    input[h] = input[h].split(' ').map(x=>+x);
    board[h] = input[h];
}

for (let h = 0; h < H; ++h){
    for (let w = 0; w < W; ++w) {
        let [top, left] = [0,0];
        if (h-1 >= 0) top = board[h-1][w];
        if (w-1 >= 0) left = board[h][w-1];
        const now = board[h][w];
        board[h][w] = Math.max(now+top, now+left);
    }
}
console.log(board[H-1][W-1]);