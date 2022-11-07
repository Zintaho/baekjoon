let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(x=>parseInt(x, 10));
let sum = input.reduce((a,b) => a+b);
let isEnd = false;
for (let i = 0; i<8; ++i) {
    for (let j = i+1; j < 9; ++j) {
        if ((sum - (input[i] + input[j])) === 100 ) {
            input[i] = 0;
            input[j] = 0;
            isEnd = true;
            break;
        }
    }
    if (isEnd) break;
}
console.log(input.filter(a=>a!==0).join('\n'));