let [HW, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [H, W] = HW.split(' ').map(x=>+x);
let board = new Array(H);
for (let h = 0 ; h < H; ++h) {
    input[h] = input[h].split(' ');
    board[h] = input[h];
}

let count = 0;
let max = 0;
for (let h = 0; h < H; ++h){
    for (let w = 0; w < W; ++w) {
        let a = board[h][w];
        if (a === '1') {
            count++;
            let area = {area : 0};
            fill(board, h, w, H, W, area);
            max = Math.max(max, area.area);
        }
    }
}
console.log(count);
console.log(max);

function fill(board, h, w, H, W, area) {
    if (h < 0 || w < 0 || h >= H || w >= W ) return;

    if (board[h][w] === '1') {
        board[h][w] = '0';
        area.area++;
        fill(board, h+1, w, H, W, area);
        fill(board, h, w+1, H, W, area);
        fill(board, h-1, w, H, W, area);
        fill(board, h, w-1, H, W, area);
    } else {
        return;
    }
}