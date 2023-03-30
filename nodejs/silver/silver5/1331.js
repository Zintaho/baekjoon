let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let alpha = {
    'A':0, 'B':1, 'C':2, 'D':3, 'E':4, 'F':5
}
let check = new Array(6).fill(0);
check = check.map(x=>new Array(6).fill(0));
let isValid = true;

let last = [-1, -1];
let first = [-1, -1];

const diff = (a,a_, b, b_) => {
    let [aDiff, bDiff] = [Math.abs(a-a_), Math.abs(b-b_)];
    let result = true;

    let moved = aDiff + bDiff;
    if (moved !== 3) result = false;
    else {
        if (aDiff === 0 || bDiff === 0 || aDiff === 3 || bDiff === 3) result = false;
    }

    return result;
}

for (let square of input) {
    let [a,b] = square.split('');
    [a,b] = [alpha[a], (+b-1)];
    
    // 중복 카운트
    check[b][a]++;
    if (check[b][a] > 1) {isValid = false; break;}
    
    // 가능한 이동인지 판정
    if (last[0] >= 0 && last[1] >= 0) {
        isValid = diff(a, last[0], b, last[1]);
        if (!isValid) break;

    } else {
        first = [a,b];
    }

    last = [a,b];
}
if (isValid) {isValid = diff(first[0], last[0], first[1], last[1])};

console.log(isValid?'Valid':'Invalid');