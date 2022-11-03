const countJoi = (str, joi) => {
    let count = 0;
    for (let i = 0; i < str.length - 2; ++i) {
        if (str.slice(i, i+3) === joi) count++;
    }
    return count;
}
let input = require('fs').readFileSync('/dev/stdin').toString().trim();
console.log(countJoi(input, 'JOI'));
console.log(countJoi(input, 'IOI'));
