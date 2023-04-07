let [NM, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
input = input.split(' ');

let sums = new Array(N);
input.forEach((x, i) => {
    x = +x;
    input[i] = x;
    if (i === 0) {sums[0] = x; return;}

    sums[i] = sums[i-1] + x;
});

let count = 0;

for (let b = 0; b < N; ++b) {
    for (let a = 0; a <= b; ++a) {
        let m = a===b? sums[b] : (sums[b] - sums[a]);
        if (m === M) ++count;
    }
}

console.log(count);