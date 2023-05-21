let [CR, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
CR = CR.split(' ').map(x=>+x);
let [C, R] = [+CR[0], +CR[1]]; K = +K;
console.log(getResult());

function getResult() {
    if (K > C*R) return 0;

    let [x, y, X, Y] = [1, 1, 0, 0];
    let delta = [0, 1];

    let k = 1;
    while (true) {
        if (k === K) return `${x} ${y}`;
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

        ++k;
    }
}