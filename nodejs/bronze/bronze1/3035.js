let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [R, C, ZR, ZC] = input[0].split(' ').map(x=>+x);
let output = '';
for (let r = 1; r <= R; ++r) {
    let temp = '';
    for (let c = 0; c < C; ++c) {
        temp += (input[r][c]).repeat(ZC);
    }
    temp = (temp.trim()+'\n').repeat(ZR);
    output += temp;
}
console.log(output.trim());