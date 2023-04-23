let [N, A, B] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let round = 1;

let getEnemy = (K) => {
    let E = K%2===1? K+1 : K-1;
    if (E > N) return 0;
    else return E;
}

while (N >= 1) {
    if (N === 1) {
        round = -1;
        break;
    }
    if (getEnemy(A) === B && getEnemy(B) === A) break;

    A = Math.ceil(A/2);
    B = Math.ceil(B/2);
    N = Math.ceil(N/2);
    round++;
}
console.log(round);