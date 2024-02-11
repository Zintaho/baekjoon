let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
T = +T;

let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let [L, S, E] = input.slice(t*3, t*3+3);
    L = +L;

    output[t] = bfs(L, S, E);
}
console.log(output.join('\n'));

function bfs(L, S, E) {
    
    let [sA, sB] = S.split(' ').map(x=>+x);
    let [eA, eB] = E.split(' ').map(x=>+x);
    let count = 0;

    if (sA === eA && sB === eB) return count;

    let queue = [[sA, sB]];
    let [start, end] = [0, queue.length];

    let check = Array.from({length : L}, _ => new Array(L).fill(0));
    check[sA][sB] = 1;

    while (queue.length > 0) {
        for (let i = start; i < end; ++i) {
            let [a, b] = queue.shift();
            if (eA === a && eB === b) return count;

            if (a - 2 >= 0 && b - 1 >= 0 && check[a-2][b-1] === 0) {
                check[a - 2][b - 1] = 1;
                queue.push([a-2, b-1]);
            }
            if (a - 1 >= 0 && b - 2 >= 0 && check[a-1][b-2] === 0) {
                check[a - 1][b - 2] = 1;
                queue.push([a-1, b-2]);
            }
            if (a + 1 < L && b - 2 >= 0 && check[a+1][b-2] === 0) {
                check[a + 1][b - 2] = 1;
                queue.push([a+1, b-2]);
            }
            if (a + 2 < L && b - 1 >= 0 && check[a+2][b-1] === 0) {
                check[a + 2][b - 1] = 1;
                queue.push([a+2, b-1]);
            }
            if (a + 2 < L && b + 1 < L && check[a+2][b+1] === 0) {
                check[a + 2][b + 1] = 1;
                queue.push([a+2, b+1]);
            }
            if (a + 1 < L && b + 2 < L && check[a+1][b+2] === 0) {
                check[a + 1][b + 2] = 1;
                queue.push([a+1, b+2]);
            }
            if (a - 1 >= 0 && b + 2 < L && check[a-1][b+2] === 0) {
                check[a - 1][b + 2] = 1;
                queue.push([a-1, b+2]);
            }
            if (a - 2 >= 0 && b + 1 < L && check[a-2][b+1] === 0) {
                check[a - 2][b + 1] = 1;
                queue.push([a-2, b+1]);
            }
        }
        start = 0;
        end = queue.length;
        count++;
    }
    return count;
}