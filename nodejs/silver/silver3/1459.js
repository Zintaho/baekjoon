let [X, Y, W, S] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
if (2*W <= S) {
    console.log((X+Y) * W);
} else {
    let min = Math.min(X,Y);
    let sum = min * S;
    X -= min; Y -= min;

    let Z = Math.max(X,Y);
    min = Math.min(
        (Math.floor(Z / 2) * 2 * S) + ((Z % 2) * W),
        (Math.floor(Z / 2) * 2 + (Z % 2)) * W,
    )
    sum += min;
    console.log(sum);
}