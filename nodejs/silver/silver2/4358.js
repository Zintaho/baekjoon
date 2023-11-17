let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let sList = [];
let sMap = [];

for (let a of input) {
    if (a in sMap) sMap[a]++;
    else {
        sMap[a] = 1;
        sList.push(a);
    }
}
sList.sort();
let N = input.length;
sList.forEach((x, i) => {
    sList[i] = `${x} ${((sMap[x] / N * 100) + 1e-5).toFixed(4)}`;
});

console.log(sList.join('\n'));