let P = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
P.forEach((x, i) => {
    P[i] = x.split(' ').map(y=>Number(y));
});

let v1 = {
    x : P[1][0] - P[0][0],
    y : P[1][1] - P[0][1]
}
let v2 = {
    x : P[2][0] - P[1][0],
    y : P[2][1] - P[1][1]
}

let cross = v1.x * v2.y - v2.x * v1.y;
let V1 = Math.sqrt(v1.x * v1.x + v1.y * v1.y);
let V2 = Math.sqrt(v2.x * v2.x + v2.y * v2.y);
let sin = cross / (V1*V2);
if (sin < 0) console.log(-1);
else if (sin === 0) console.log(0);
else if (sin > 0) console.log(1);