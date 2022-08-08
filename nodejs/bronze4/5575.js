let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let output = '';
for (nums of input) {
    let [h1, m1, s1, h2, m2, s2] = nums.split(' ').map(x=>parseInt(x,10));
    let [h, m, s] = [h2-h1, m2-m1, s2-s1];
    if (s < 0) {
        s += 60;
        m -= 1;
    }
    if (m < 0) {
        m += 60;
        h -= 1;
    }
    output += `${h} ${m} ${s}\n`;
}
console.log(output);