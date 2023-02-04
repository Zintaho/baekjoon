let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let board = new Array(100).fill(0).map(x=>new Array(100).fill(0));
let [N, M] = input[0].split(' ').map(x=>+x);
for (let i = 1; i <= N; ++i) {
    let [ax, ay, bx, by] = input[i].split(' ').map(x=>+x);
    for (let y = ay-1; y < by; ++y) {
        for (let x = ax-1; x < bx; ++x) {
            board[y][x]++;
        }
    }
}
let sum = 0;
board.forEach((arr)=> {
    arr.forEach((a) => {if(a > M) sum++;})
});
console.log(sum);