let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];

let cownt = new Array(11).fill(0);
let cowmap = {};
for (let i = 1; i <= N; ++i) {
    let [cow, pos] = input[i].split(' ').map(x=>+x);
    if (cow in cowmap && cowmap[cow] != pos) cownt[cow]++;
    cowmap[cow] = pos;
}
console.log(cownt.reduce((a,b) => a+b));