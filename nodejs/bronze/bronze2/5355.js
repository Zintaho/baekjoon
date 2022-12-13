let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
for (let i = 1; i <= N; ++i) {
    let [k,...ops] = input[i].split(' ');
    k = Number(k);
    for (const op of ops) {
        switch (op) {
            case '@':
                k *= 3;
                break;
            case '%':
                k += 5;
                break;
            case '#':
                k -= 7;
                break;
        }
    }
    k = k.toFixed(2);
    output += `${k}\n`;
}
console.log(output);
