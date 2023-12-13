let [NM, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
board.forEach((x,i) => board[i] = x.split(''));

bfs();

function bfs() {
    let queue = [[0, 0]];
    let depth = 0;

    fill(0, 0);

    let [before, after] = [0, 1];
    while (true) {
        let count = 0;
        for (let i = before; i < after; ++i) {

            let node = queue[i];
            let [x,y] = node;
            if (x === M-1 && y === N-1){
                console.log(depth+1);
                return;
            }
    
            if (y+1 < N && board[y+1][x] === '1') {
                queue.push([x, y+1]); count++;
                fill(x, y+1);
            }
            if (x+1 < M && board[y][x+1] === '1') {
                queue.push([x+1, y]); count++;
                fill(x+1, y);
            }
            if (y-1 >= 0 && board[y-1][x] === '1') {
                queue.push([x, y-1]); count++;
                fill(x, y-1);
            }
            if (x-1 >= 0 && board[y][x-1] === '1') {
                queue.push([x-1, y]); count++;
                fill(x-1, y);
            }
        }

        depth++;
        before = after;
        after += count;
    }
}

function fill(x,y) {
    board[y][x] = '0';
}