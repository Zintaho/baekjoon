let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let X = {};
let Y = {};
for (i = 0; i < 3; ++i) {
    let [a,b] = input[i].split(' ').map(x=>parseInt(x, 10));
    if (a in X) X[a] += 1;
    else X[a] = 1;

    if (b in Y) Y[b] += 1;
    else Y[b] = 1;
}
let [x,y] = ['', ''];
for (i in X) {if (X[i] === 1) x = i;}
for (j in Y) {if (Y[j] === 1) y = j;}
console.log(x,y);