let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);

let output = new Array(N).fill(0);
let target;

output.forEach((x, i) => {output[i] = new Array(N).fill(0);});
getResult();

function getResult() {
    let [x, y, X, Y, R, C] = [1, 1, 0, 0, N, N];
    let delta = [0, 1];

    let k = N*N;
    while (k > 0) {
        output[y - 1][x - 1] = k;
        if (k === K) target = `${y} ${x}`;

        x += delta[0];
        y += delta[1];

        if (y > R) {
            X++
            x = (X+1);

            y = R;
            delta = [1, 0];
        } else if (x > C) {
            R--;

            x = C;
            y = R;
            delta = [0, -1];
        } else if (y === Y) {
            C--;

            x = C;
            y+= 1;
            delta = [-1, 0];
        } else if (x === X) {
            Y++;
            y = (Y+1);

            x = (X+1);
            delta = [0, 1];
        }

        --k;
    }
}
output = output.map((x) => x.join(' '));
console.log(output.join('\n'));
console.log(target);