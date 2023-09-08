let [RC, ...board] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C] = RC.split(' ').map(x=>+x);
board = board.map(x=>x.split(''));

let [y,x] = [0, 0];
let A = 'A'.charCodeAt(0);
let output = 0;

move(y, x, 0b00_0000_0000_0000_0000_0000_0000);
function move(y,x, check, route="") {
    let char = board[y][x];
    let checkI = char.charCodeAt(0) - A;
    let isChecked = ((check & (1 << checkI)) !== 0);
    if (!isChecked) {
        route += char;
        check |= (1 << checkI);
    
        if (x-1 >= 0) move(y, x-1, check, route);
        if (y-1 >= 0) move(y-1, x, check, route);
        if (x+1 < C) move(y, x+1, check, route);
        if (y+1 < R) move(y+1, x, check, route);
    }
    output = Math.max(output, route.length);
}

console.log(output);