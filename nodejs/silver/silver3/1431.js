let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.sort((a,b) => {

    // 1
    let [aLen, bLen ] = [a.length, b.length];
    if (aLen > bLen) return 1;
    else if (aLen < bLen) return -1;

    //2
    let [aSum, bSum] = [0, 0];
    let ZERO = '0'.charCodeAt(0);
    for (let i = 0; i < aLen /*aLen===bLen*/; ++i) {
        let [aK, bK] = [a.charCodeAt(i) - ZERO, b.charCodeAt(i) - ZERO];
        if (0 <= aK && aK <= 9) aSum += aK;
        if (0 <= bK && bK <= 9) bSum += bK;
    }

    if (aSum > bSum) return 1;
    else if (aSum < bSum) return -1;

    //3
    if (a > b) return 1;
    else if (a < b) return -1;
});
console.log(input.join('\n'));