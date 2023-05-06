let [NM, ...room]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);
let count = 0;

const row = new RegExp(/\-+/g);
const col = new RegExp(/\|+/g);

// 행 판정
for (let n = 0; n < N; ++n) {
    const a = room[n].match(row);
    if (a) count += a.length;
}
// 열 판정
for (let m = 0; m < M; ++m) {
    let text = '';
    for (let n = 0; n < N; ++n) text += room[n].charAt(m);
    const a = text.match(col);
    if (a) count += a.length;
}
console.log(count);