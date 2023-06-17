let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x, i) => {
    input[i] = x.split(' ').map(x=>+x);
});

N = +N;

let [x1,y1] = [0,0];
let result = false;

move(x1, y1);
console.log(result?'HaruHaru' : 'Hing');

function move(x, y) {
    if (x >= N || y >= N) return;
    if (x === (N-1) && y === (N-1)) {
        result = true;
        return;
    }
    let d = input[y][x];
    if (d === 0) return;
    move(x+d, y);
    move(x, y+d);
}