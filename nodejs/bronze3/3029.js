let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [ha, ma, sa] = input[0].split(':').map(x=>parseInt(x, 10));
let [hb, mb, sb] = input[1].split(':').map(x=>parseInt(x, 10));
let [h, m, s] = [hb-ha, mb-ma, sb-sa];
if (s < 0) {
    s += 60;
    m -= 1;
}
if (m < 0) {
    m += 60;
    h -= 1;
}
if (h < 0) {
    h += 24;
}
if (h === 0 && m === 0 && s === 0) h = 24;
h = `${h < 10? '0' : ''}${h}`;
m = `${m < 10? '0' : ''}${m}`;
s = `${s < 10? '0' : ''}${s}`;
console.log(`${h}:${m}:${s}`);