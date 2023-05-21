let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>+x);
let [R, C] = [N>1? (4*N - 1): 1, (4*N - 3)]

let output = new Array(R).fill(0);

output.forEach((x, i) => {output[i] = new Array(C).fill(' ');});
getResult();

function getResult() {
    let [x, y, X, Y] = [C, 1, 0, 0];
    let delta = [-1, 0];

    let k = R*C;
    while (k > 0) {
        if (X === (2*N) && Y === (2*N))  break;
        output[y - 1][x - 1] = '*';

        x += delta[0];
        y += delta[1];

        if (y > R) {
            X += 2
            x++;

            y = R;
            delta = [1, 0];
        } else if (x > C) {
            R-=2;

            x--;
            y--;
            delta = [0, -1];
        } else if (y === Y) {
            C-=2;

            x--;
            y++;
            delta = [-1, 0];
        } else if (x === X) {
            Y+=2;
            y++;

            x++;
            delta = [0, 1];
        }

        --k;
    }
}
output = output.map((x) => x.join('').trim());
console.log(output.join('\n').trim());