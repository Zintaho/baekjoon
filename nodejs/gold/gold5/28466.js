let [N, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
N = +N;
let cgBoard = input.slice(0, 10);
let jjBoard = input.slice(10, 22);
let members = input.slice(22, 22+N);

cgBoard = cgBoard.map(x=>x.split(' ').map(y=>+y));
jjBoard = jjBoard.map(x=>x.split(' ').map(y=>+y));
members = members.map(x=>x.split(' '));

let memberMap = {}
for (let member of members) {
    let [x, s] = member;
    x = +x;
    if (s in memberMap) memberMap[s].push(x);
    else memberMap[s] = [x];
}
members = [];
for (let [k, v] of Object.entries(memberMap)) {
    v.sort((a,b) => b-a);
    if (v.length > 3) v = v.slice(0, 3);
    for (let vv of v) {
        members.push([k, vv]);
    }
}

let LEN = members.length;
let max = 0;
for (let i = 0; i < LEN; ++i) {
    for (let j = i+1; j < LEN; ++j) {
        for (let k = j+1; k < LEN; ++k) {
            let [x, y, z] = [members[i], members[j], members[k]];
            max = Math.max(max, get(x, y, z));
        }
    }
}
console.log(max);

function cgjj(x) {
    let [a, b] = x.split('');
    let A = 'A'.charCodeAt(0);
    return [
        +a, b.charCodeAt(0) - A
    ]
}

function get(x, y, z) {
    let team = [x, y, z].map(a=>cgjj(a[0]));
    let sum = x[1] + y[1] + z[1];

    for (let i = 0; i < 3; ++i) {
        for (let j = i+1; j < 3; ++j) {
            let [ia, ib] = team[i];
            let [ja, jb] = team[j];
            sum += cgBoard[ia][ja] + jjBoard[ib][jb];
        }
    }

    return sum;
}