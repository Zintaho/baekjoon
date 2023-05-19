let [T, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
/*
    -10,000 <= (x, y) <= +10,000
    0 <= r <= 10,000
*/

let output = new Array(T);
for (let t = 0; t < +T; ++t) {
    let [x1, y1, r1, x2, y2, r2] = input[t].split(' ').map(x=>Number(x));
    const d = Math.sqrt((x2 - x1)*(x2-x1) + (y2-y1)*(y2-y1));
    [r1,r2] = [Math.min(r1,r2), Math.max(r1,r2)];
    if (d === 0&& r1 === r2) output[t] = -1;
    else if (r2 - r1 < d && d < r2 + r1) output[t] = 2;
    else if (r2+r1 === d || r2-r1 === d) output[t] = 1;
    else if (r2+r1 < d || d < r2-r1) output[t] = 0;
}

console.log(output.join('\n'));