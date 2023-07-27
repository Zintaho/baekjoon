let [T, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let angles = [
    [1, 0],
    [0, -1],
    [-1, 0],
    [0, 1]
];
let output = new Array(T); 
for (let t= 0 ; t < +T; ++t) {
    let [x, y, angle] = [0,0,0];
    let [minX, minY, maxX, maxY] = [0,0,0,0];
    for (let cmd of input[t]) {
        switch(cmd) {
            case 'F':
            case 'B':
                let [dx, dy] = angles[angle];
                if (cmd === 'F') {
                    x += dx;
                    y += dy;
                } else if (cmd === 'B') {
                    x -= dx;
                    y -= dy;
                }
                minX = Math.min(x, minX);
                minY = Math.min(y, minY);
                maxX = Math.max(x, maxX);
                maxY = Math.max(y, maxY);
                break;
            case 'L':
                angle--;
                if (angle === -1) angle = 3;
                break;
            case 'R':
                angle++;
                if (angle === 4) angle = 0;
                break;
        }
    }
    output[t] = Math.abs(maxX - minX) * Math.abs(maxY - minY);
}
console.log(output.join('\n'));