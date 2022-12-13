let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (let i = 1; i <= N; ++i) {
    let [r, e, c]= input[i].split(' ').map(x=>parseInt(x, 10));
    if (r < e-c) {
        output += 'advertise\n';
    } else if (r === e-c) {
        output += 'does not matter\n';
    } else if (r > e-c) {
        output += 'do not advertise\n';
    }
}
console.log(output);