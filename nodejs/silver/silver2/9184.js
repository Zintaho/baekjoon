let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let W = new Array(21);
for (let z = 0; z <= 20; ++z) {
    W[z] = new Array(21);
    for (let y = 0; y <= 20; ++y) {
        W[z][y] = new Array(21).fill(1);
    }
}
for (let z = 1; z<=20; ++z) {
    for (let y = 1; y<=20; ++y) {
        for (let x = 1; x<=20; ++x) {
            if (x < y && y < z) {
                W[z][y][x] = W[z-1][y][x] + W[z-1][y-1][x] - W[z][y-1][x];
            } else {
                W[z][y][x] = W[z][y][x-1] + W[z][y-1][x-1] + W[z-1][y][x-1] - W[z-1][y-1][x-1];
            }
        }
    }
}

let output = {}
for (let row of input) {
    let [a,b,c] = row.split(' ').map(Number);
    if (a===-1 && b===-1 && c===-1) break;

    if (a<=0 || b<=0 || c<=0) output[`w(${a}, ${b}, ${c}) = `] = 1;
    else if (a > 20 || b > 20 || c > 20) output[`w(${a}, ${b}, ${c}) = `] = (W[20][20][20]);
    else output[`w(${a}, ${b}, ${c}) = `] = (W[c][b][a]);
}
console.log(Object.entries(output).map(([k,v]) => `${k}${v}`).join('\n'));