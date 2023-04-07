let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+N - 1);

input = input.split(' ');

let a = 0;
input.forEach((x, i) => {
    if (i === 0) {
        a = +x;
        return;
    }
    x = +x;

    let k = euclidian(a, x);
    output[i-1] = `${a/k}/${x/k}`;
});

console.log(output.join('\n'));

function euclidian(a,b) {
    if (b > a) [a,b] = [b,a];

    while (true) {
        const r = a%b;
        if (r === 0) return b;
        [a,b] = [b, r];
    }
}