let [HW, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [H, W] = HW.split(' ').map(Number);
input = input.split(' ').map(Number);

let board = Array.from({length : H}, _ => new Array(W).fill(1));

input.forEach((x, i) => {
    for (let j = 0; j < x; ++j) {
        board[j][i] = 0;
    }
});

let sum = 0;
for (let h = 0; h < H; ++h) {
    let isOpen = false;
    let current = 0;
    for (let w = 0; w < W; ++w) {
        let a =  board[h][w];
        if (a === 1 && isOpen) {
            current++;
        } else if (a === 0) {
            if (!isOpen) isOpen = true;
            if (current > 0) {
                sum += current;
                current = 0;
            }
        }
    }
}

console.log(sum);