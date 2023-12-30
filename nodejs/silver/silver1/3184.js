let [RC, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C] = RC.split(' ').map(x=>+x);
board.forEach((x, i) => board[i] = x.split(''));
let check = Array.from({length : R}, _ => new Array(C).fill(false));

let [O, V] = [0, 0];
let [o, v] = [0, 0];
for (let y = 0; y < R; ++y) {
    for (let x = 0; x < C; ++x) {
        if (check[y][x] === true) continue;
        let a = board[y][x];
        switch(a) {
            case '#':
                check[y][x] = true;
                break;
            default:
                [o, v] = [0, 0];
                dfs(y, x);
                if (o > v) O += o;
                else V += v;
                break;
        }
    }
}
console.log(O, V);

function dfs(y,x) {
    check[y][x] = true;
    let a = board[y][x];
    switch (a) {
        case 'o': o++; break;
        case 'v': v++; break;
        case '#': return;
    }
    if (y -1 >= 0 && check[y-1][x] === false) dfs(y-1, x);
    if (x -1 >= 0 && check[y][x-1] === false) dfs(y, x-1);
    if (y+ 1 < R && check[y+1][x] === false) dfs(y+1, x);
    if (x+ 1 < C && check[y][x+1] === false) dfs(y, x+1);
}