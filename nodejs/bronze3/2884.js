let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [h,m] = input.map(x=>parseInt(x, 10));
m -= 45;
if (m < 0) {
    h -= 1;
    m += 60;
}
if (h < 0) {
    h += 24;
}
console.log(h, m);
