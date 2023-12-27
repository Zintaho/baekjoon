let [N, K] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let checked = new Set();
console.log(bfs());

function bfs() {
    let sec = 0;
    if (N === K) return sec;

    let queue = [N-1, N+1, N*2];
    checked.add(N-1);
    checked.add(N+1);
    checked.add(N*2);

    let [start, end] = [0, 3];
    while (start < end) {
        sec++;
        for (let i = start; i < end; ++i) {
            let a = queue[i];
            if (a === K) return sec;
            checked.add(a);

            if (!checked.has(a-1) && a-1 >= 0) queue.push(a-1);
            if (!checked.has(a+1) && a+1 <= 100000) queue.push(a+1);
            if (!checked.has(a*2) && a*2 <= 100000) queue.push(a*2);
        }
        start = end;
        end = queue.length;
    }
}