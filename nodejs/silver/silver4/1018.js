let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = input[0].split(' ').map(x=>parseInt(x, 10));
let board = new Array(N);
for (let y = 1; y <= N; ++y) {
    board[y-1] = input[y].split('');
}
let min = N*M;
let WB = ['W', 'B']

for (let Y = 0; Y <= N-8; ++Y) {
    for (let X = 0; X <= M-8; ++X) {

        let sum = 0;
        for (let y = Y; y < Y+8; ++y) {
            for (let x = X; x < X+8; ++x) {
                if (WB[(x+y)%2] !== board[y][x]) sum++;
            }
        }
        min = (sum < min)?sum:min;

        sum = 0;
        for (let y = Y; y < Y+8; ++y) {
            for (let x = X; x < X+8; ++x) {
                if (WB[(x+y+1)%2] !== board[y][x]) sum++;
            }
        }
        min = (sum < min)?sum:min;
    }
}
console.log(min);