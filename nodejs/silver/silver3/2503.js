let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let set = new Array();
for (let x = 1; x <= 9; ++x) {
    for (let y = 1; y <= 9; ++y) {
        for (let z = 1; z <= 9; ++z) {
            if (x!=y && y!=z && x!=z) set.push([x, y, z]);
        }
    }
}

for (let i = 0; i < N; ++i) {
    let [q, s, b] = input[i].split(' ');
    [s, b] = [+s, +b];
    q = Array.from({length:q.length}, (_, i)=>+q[i]);
    let newSet = new Array();
    if (s === 3 && b === 0) {
        console.log(1);
        break;
    } else if (s === 2 && b === 0) {
        // 2스트라이크 1볼은 불가능
        for (let c of set) {
            if (q[0] === c[0] && q[1] === c[1] && q[2] !== c[2]) newSet.push(c);
            else if (q[0] === c[0] && q[1] !== c[1] && q[2] === c[2]) newSet.push(c);
            else if (q[0] !== c[0] && q[1] === c[1] && q[2] === c[2]) newSet.push(c);
        }
    } else if (s === 1 && b === 2) {
        for (let c of set) {
            if (q[0] === c[0] && q[1] === c[2] && q[2] === c[1]) newSet.push(c);
            else if (q[1] === c[1] && q[0] === c[2] && q[2] === c[0]) newSet.push(c);
            else if (q[2] === c[2] && q[0] === c[1] && q[1] === c[0]) newSet.push(c);
        }
    } else if (s === 1 && b === 1) {
        for (let c of set) {
            if (q[0] === c[0] && q[1] === c[2] && q[2] !== c[1]) newSet.push(c);
            else if (q[0] === c[0] && q[1] !== c[2] && q[2] === c[1]) newSet.push(c);
            else if (q[1] === c[1] && q[0] === c[2] && q[2] !== c[0]) newSet.push(c);
            else if (q[1] === c[1] && q[0] !== c[2] && q[2] === c[0]) newSet.push(c);
            else if (q[2] === c[2] && q[0] === c[1] && q[1] !== c[0]) newSet.push(c);
            else if (q[2] === c[2] && q[0] !== c[1] && q[1] === c[0]) newSet.push(c);
        }
    } else if (s === 1 && b === 0) {
        for (let c of set) {
            if (q[0] === c[0] && !(c.indexOf(q[1]) >= 0) && !(c.indexOf(q[2]) >= 0)) newSet.push(c);
            else if (q[1] === c[1] && !(c.indexOf(q[0]) >= 0) && !(c.indexOf(q[2]) >= 0)) newSet.push(c);
            else if (q[2] === c[2] && !(c.indexOf(q[0]) >= 0) && !(c.indexOf(q[1]) >= 0)) newSet.push(c);
        }
    } else if (s === 0 && b === 0) {
        for (let c of set) {
            if (!(c.indexOf(q[0]) >= 0) && !(c.indexOf(q[1]) >= 0) && !(c.indexOf(q[2]) >= 0)) newSet.push(c);
        }
    } else if (s === 0 && b === 1) {
        for (let c of set) {
            if ((c.indexOf(q[0]) >= 0) && q[0] !== c[0] && !(c.indexOf(q[1]) >= 0) && !(c.indexOf(q[2]) >= 0)) newSet.push(c);
            else if ((c.indexOf(q[1]) >= 0) && q[1] !== c[1] &&  !(c.indexOf(q[0]) >= 0) && !(c.indexOf(q[2]) >= 0)) newSet.push(c);
            else if ((c.indexOf(q[2]) >= 0) && q[2] !== c[2] &&  !(c.indexOf(q[0]) >= 0) && !(c.indexOf(q[1]) >= 0)) newSet.push(c);
        }
    } else if (s === 0 && b === 2) {
        for (let c of set) {
            if ((c.indexOf(q[0]) >= 0) && q[0] !== c[0] && (c.indexOf(q[1]) >= 0) && q[1] !== c[1] && !(c.indexOf(q[2]) >= 0)) newSet.push(c);
            if ((c.indexOf(q[1]) >= 0) && q[1] !== c[1] && (c.indexOf(q[2]) >= 0) && q[2] !== c[2] && !(c.indexOf(q[0]) >= 0)) newSet.push(c);
            if ((c.indexOf(q[2]) >= 0) && q[2] !== c[2] && (c.indexOf(q[0]) >= 0) && q[0] !== c[0] && !(c.indexOf(q[1]) >= 0)) newSet.push(c);
        }
    } else if (s === 0 && b === 3) {
        for (let c of set) {
            if ((c.indexOf(q[0]) >= 0) && q[0] !== c[0] && (c.indexOf(q[1]) >= 0) && q[1] !== c[1] && (c.indexOf(q[2]) >= 0) && q[2] !== c[2] ) newSet.push(c);
        }
    } 
    set = newSet;
}
console.log(set.length);