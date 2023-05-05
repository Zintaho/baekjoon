let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let hash = {};
for (let y = 0; y < 5; ++y) {
    let row = input[y].split(' ');
    input[y] = row;
    for (let x = 0; x < 5; ++x) {
        hash[row[x]] = [y, x];
    }
}

let k = 1;
for (let y = 5; y < 10; ++y) {
    let row = input[y].split(' ');
    let check = false;
    for (let x = 0; x < 5; ++x) {
        let [Y, X] = hash[row[x]];
        input[Y][X] = 0;
        if (k >= 12) {
            check = checkBingo(input);
        }
        if (check) break;
        ++k;
    }
    if (check) break;
}
console.log(k);

function checkBingo(board) {
    let count = 0;
    // 가로줄
    for (let y = 0; y < 5; ++y) {
        let row = 0;
        for (let x = 0; x < 5; ++x) {
            row += board[y][x];
        }
        if (row === 0) count++;
    }

    // 세로줄
    for (let x = 0; x < 5; ++x) {
        let col = 0;
        for (let y = 0; y < 5; ++y) {
            col += board[y][x];
        }
        if (col === 0) count++;
    }

    // 대각선
    let [a, b] = [0, 0];
    for (let i = 0; i < 5; ++i) {
        a += board[i][i];
        b += board[i][4-i];
    }
    if (a === 0) count++;
    if (b === 0) count++;

    return count >= 3;
};