let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>x.split(' '));
let set = new Set();
for (let y = 0; y < 5; ++y) {
    for (let x = 0;  x < 5; ++x) {
        search(x,y);
    }
}
console.log(set.size);

function search(x, y, k=0, s='') {
    if (k === 6) return set.add(s);
    s += input[y][x];
    //상
    if (y-1 >= 0) search(x, y-1, k+1, s);
    //하
    if (y+1 < 5) search(x, y+1, k+1, s);
    //좌
    if (x-1 >= 0) search(x-1, y, k+1, s);
    //우
    if (x+1 < 5) search(x+1, y, k+1, s);
};
