let [n, ab, m, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
[n, m]= [+n, +m];
let [a,b] = ab.split(' ').map(x=>+x - 1);

let board = Array.from({length:n}, _=>new Array());

for (let i = 0; i < m; ++i) {
    let [x,y] = input[i].split(' ').map(x=>+x - 1);
    board[x].push(y);
    board[y].push(x);
}

let check = new Array(n).fill(false);
let isFinished = false;
dfs(a, b);
if (!isFinished) console.log(-1);

function dfs(c, d, lv = 0) {
    if (c === d) {
        console.log(lv);
        isFinished = true;
    }
    if (isFinished) return;
    check[c]=true;
    for (let cc of board[c]) {
        if (!check[cc]) dfs(cc, d, lv+1);
    }
}