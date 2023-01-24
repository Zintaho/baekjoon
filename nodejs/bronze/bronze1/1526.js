let N = require('fs').readFileSync('/dev/stdin').toString().trim();
let len = N.length;
N = +N;
let answer = 0;
if (N < +'4'.repeat(len)) answer = +'7'.repeat(len-1);
else {
    let max = parseInt('1'.repeat(len), 2);
    let zeros = '0'.repeat(len-1);
    while (max >= 0) {
        let num = max.toString(2);
        num = `${zeros.substring(num.length-1)}${num}`;
        let newNum = '';
        for (let c of num) {
            if (c === '1') newNum += '7';
            else if (c === '0') newNum += '4';
        }
        newNum = +newNum;
        if (newNum <= N) {
            answer = newNum;
            break;
        }
        max--;
    }
}
console.log(answer);