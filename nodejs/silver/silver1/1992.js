let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');


let output = '';
check(0, 0, +N, +N);


function check(y1,x1, y2,x2) {
    let first = undefined;
    let doBreak = false;
    for (let y = y1; y < y2; ++y) {
        for (let x = x1; x < x2; ++x) {
            let a = input[y].charAt(x);
            if (first === undefined) first = a;
            else if (first !== a) doBreak = true;

            if (doBreak) break;
        }
        if(doBreak) break;
    }
    if (doBreak) {
        let yd = (y2-y1)/2;
        let xd = (x2-x1)/2;
        output += '(';
        check(y1, x1, y1+yd, x1+xd);
        check(y1, x1+xd, y1+yd, x2);
        check(y1+yd, x1, y2, x1+xd);
        check(y1+yd, x1+xd, y2, x2);
        output += ')'
    } else {
        output += first;
    }
}

console.log(output);