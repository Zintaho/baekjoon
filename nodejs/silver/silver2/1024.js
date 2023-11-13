let [N, L] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);
let output = -1;
while (L <= 100) {
    let [a,b,d] = [
        Math.floor(N/L),
        Math.ceil(N/L),
        Math.ceil(L/2) - 1
    ];
    if (
        (a === b && L%2 === 0)
    ||  (a !== b && L%2 !== 0)
    ||  (L % 2 === 0 && ((a+b) * L/2) !== N) 
    ||  (L % 2 === 1 && (a * L) !== N)
    ) {
        L++;
        continue;
    }
    if (a-d < 0) break;

    let front = [];
    let rear = [a];
    if (a!==b) rear.push(b);
    for (let k = 1; k <= d; ++k) {
        front.push(a-k);
        rear.push(b+k);
    }

    front = front.reverse();
    output = [...front, ...rear];
    break;
}
console.log(output === -1? output : output.join(' '));