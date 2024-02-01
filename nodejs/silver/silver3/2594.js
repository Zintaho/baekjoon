let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x, i) => input[i] = x.split(' ').map(y=>+y));
input.sort((a, b) => {
    if (a[0] === b[0]) return a[1] - b[1];
    else return a[0] - b[0];
});

let max = 0;
let cnt = 0;
let [start, end] = [1000, 1000];
for (let n = 0; n < +N; ++n) {
    let [a, b] = input[n];
    if (start <= a && a <= end) {
        end = Math.max(end, b);
    } else {
        max = Math.max(max, timediff(end, a) - (end !== 1000?20:10));
        cnt++;
        [start, end] = [a, b];
    }
}
max = Math.max(max, timediff(end, 2200) - 10);
console.log(max);

function timediff(tl, th) {
    let [tlh, tlm] = h_and_m(tl);
    let [thh, thm] = h_and_m(th);   

    return ((thh - tlh) * 60 + thm - tlm);
}
function h_and_m(t) {
    let m = t % 100;
    let h = (t - m) / 100;
    return [h, m]
}