let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let i = 0;
let output = [];
while (true) {
    let [R,C] = input[i++].split(' ').map(x=>+x);
    if (R === 0 && C === 0) break;
    let I = i;
    for (let r = 0; r < R; ++r, ++i) {
        let Y = R+I;

        let row = input[i];
        let line = new Array(C);

        for (let c = 0; c < C; ++c) {
            let cnt = 0;
            let a = row.charAt(c);
            if (a === '*') {
                line[c] = '*';
                continue;
            }
            for (let y = i-1; y <= i+1; ++y) {
                for (let x = c - 1; x <= c + 1; ++x) {
                    if (x < 0 || x >= C || y < I || y >= Y) continue;
                    if (input[y].charAt(x) === '*') cnt++;
                }
            }
            line[c] = cnt;
        }

        output.push(line.join(''));
    }
}
console.log(output.join('\n').trimEnd());