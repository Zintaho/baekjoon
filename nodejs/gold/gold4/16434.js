let [NA, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
let [N, H] = NA.split(' ').map(BigInt);
input.forEach((x, i) => {
    input[i] = x.split(' ').map(BigInt);
});

let [left , right] = [1n, 2n**64n];
let min = right;

while (left <= right) {
    let hAtk = [H];
    let hMax = (left + right) / 2n;
    let hCur = hMax;
    for (let [t,a,h] of input) {
        const delta = turn(t, a, h, hAtk);
        hCur+=delta;
        if (delta >= 0n) {
            if (hCur > hMax) hCur = hMax;
        } else {
            if (hCur <= 0n) break;
        }
    };

    if (hCur >= 1n) {
        if (hMax < min) min = hMax;
        right = hMax - 1n;
    } else {
        left = hMax + 1n;
    }
}
console.log(min.toString());

function turn(t, a, h, hAtk) {
    switch(t) {
        case 1n:
            let k = h / hAtk[0] - 1n;
            if (h % hAtk[0] !== 0n) k+=1n;

            return -(a*k);
        case 2n:
            hAtk[0] += a;
            return h;
    }
}  
