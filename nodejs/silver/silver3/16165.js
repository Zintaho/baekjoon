let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let map = {};
let output = [];
let [n, m] = [0,0];

let [temp, k] = [[], 0];
for (let row of input) {
    if (n < N) {
        if (temp.length === 0) {
            temp.push(row);
        } else if (temp.length === 1) {
            k = +row;
            temp.push(k);
        } else {
            temp.push(row);
            map[row] = temp[0];
            if (temp.length === k + 2) {
                newtemp = temp.slice(2);
                newtemp.sort();
                map[temp[0]] = newtemp;
                temp = [];
                k = 0;
                n++;
            }
        }
    } else if (m < M) {
        if (temp.length === 0) {
            temp.push(row);
        } else if (temp.length === 1) {
            if (row === '0') {
                output = output.concat(...map[temp[0]]);
            } else if (row === '1') {
                output.push(map[temp[0]]);
            }
            temp = [];
        }
    } else break;
}
console.log(output.join('\n'))