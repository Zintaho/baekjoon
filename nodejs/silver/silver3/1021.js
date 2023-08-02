let [NM, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let queue = Array.from({length:N}, (_,i) => i+1);
let cursor = 0;
input = input.split(' ').map(x=>+x);

let cnt = 0;
for (let a of input) {
    let [i, j] = [0, 0];

    // clockwise
    let cw = cursor;
    for (i = 0; i < N; ++i) {
        if (cw >= N) cw -= N;
        if (queue[cw++] === a) break;
    }

    // counter-cw
    let ccw = cursor;
    for (j = 0; j < N; ++j) {
        if (ccw < 0) ccw += N;
        if (queue[ccw--] === a) break;
    }

    if (i <= j) {
        cnt += i;
        cursor += i;
        if (cursor >= N) cursor -= N;
    } else {
        cnt += j;
        cursor -= j;
        if (cursor < 0) cursor += N;
    }

    queue.splice(cursor, 1);

    N--;
}
console.log(cnt);