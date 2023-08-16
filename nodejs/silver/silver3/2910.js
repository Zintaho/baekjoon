// 빈도 정렬
let [NC, seq] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, C] = NC.split(' ').map(x=>+x);
seq = seq.split(' ').map(x=>+x);

let countMap = {};
let numMap = {};

let n = 0;
for (let i = 0; i < N; ++i) {
    let a = seq[i];
    if (!(a in countMap)) countMap[a] = 1;
    else countMap[a]++;

    if (!(a in numMap)) numMap[a] = n++;
}

seq.sort((a,b) => {
    if (countMap[a] < countMap[b]) return 1;
    else if (countMap[a] > countMap[b]) return -1;

    if (numMap[a] > numMap[b]) return 1;
    else return - 1;
});

console.log(seq.join(' '));