let [N, R, C] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let P = Math.pow(2, N);
recurse(N, R, C, 0, 0, P, P, 0, P*P-1);

function recurse(n, r, c, top, left, bottom, right, start, end) {
    if (n === 0) {
        console.log(end);
        return;
    }

    let nd = Math.pow(2, n-1);
    let p = nd*2;

    if ((top <= r && r < top+nd) && (left <= c && c < left+nd)) {
        /* 1 */
        recurse(n-1, r, c, top, left, top+nd, left+nd, start, start+p*nd/2 -1);
    } else if ((top <= r && r < top+nd) && (left+nd <= c && c < right)) {
        /* 2 */
        recurse(n-1, r, c, top, left+nd, top+nd, right, start+p*nd/2, start+p*nd -1);
    } else if ((top+nd <= r && r < bottom) && (left <= c && c < left+nd)) {
        /* 3 */
        recurse(n-1, r, c, top+nd, left, bottom, left+nd, start+p*nd, end -p*nd/2);
    } else if ((top+nd <= r && r < bottom) && (left+nd <= c && c < right)) {
        /* 4 */
        recurse(n-1, r, c, top+nd, left+nd, bottom, right, end -p*nd/2 + 1, end);
    }
}