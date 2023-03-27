let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let len = input.length;
let min = 'z'.repeat(len);

const srj = (str) => {
    return str.split('').reverse().join('');
}

for (let i = 1; i <= len - 2; ++i) {
    for (let j = i+1; j <= len - 1; ++j) {
        let [a,b,c] = [input.substring(0, i), input.substring(i, j), input.substring(j, len)];
        let str = srj(a) + srj(b) + srj(c);
        if (min > str) min = str;
    }
}

console.log(min);