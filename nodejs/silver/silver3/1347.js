let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let dir = [
    [0,1],
    [-1,0],
    [0,-1],
    [1,0]
]
let [x,y,a] = [0,0,0];
let min = {x:0, y:0};
let max = {x:0, y:0};
let trail = new Set();
trail.add([x,y]);
for (let c of input) {
    switch(c) {
        case 'L':
            if (--a === -1) a = 3;
            break;
        case 'R':
            if (++a === 4) a = 0;
            break;
        case 'F':
            let [dx, dy] = dir[a];
            x += dx;
            y += dy;
            min.x = Math.min(x, min.x);
            min.y = Math.min(y, min.y);
            max.x = Math.max(x, max.x);
            max.y = Math.max(y, max.y);
            trail.add([x,y]);
            break;
    }
}
max.x -= min.x;
max.y -= min.y;
let output = new Array(max.y+1).fill(0).map(_=>new Array(max.x+1).fill('#'));
trail.forEach(t => {
    let [X,Y] = [t[0] - min.x , t[1] - min.y];
    output[Y][X] = '.';
});

output = output.map(x=>x.join(''));
console.log(output.join('\n'));