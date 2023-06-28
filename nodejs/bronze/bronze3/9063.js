let [n,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let [maxX, maxY, minX, minY]= [-10000,-10000,10000,10000];

for (let i = 0; i < +n; ++i) {
    let sphere = input[i];

    let [x,y] = sphere.split(' ').map(x=>Number(x));
    maxX = Math.max(maxX, x);
    maxY = Math.max(maxY, y);
    minX = Math.min(minX, x);
    minY = Math.min(minY, y);
}
let result = ((maxX- minX) * (maxY - minY));
console.log(result);