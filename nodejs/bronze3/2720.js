let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.map(x=>parseInt(x, 10));
let N = input[0];
let output = '';
let divs = [25, 10, 5, 1];
for (i = 1; i<= N; ++i) {
    let k = input[i];
    let answer = new Array(4).fill(0);
    for (j = 0; j < 4; ++j) {
        let div = divs[j];
        let a = Math.floor(k/div);
        if (a) answer[j] = a;
        k -= (a*div);
    }
    output += `${answer.join(' ')}\n`;
}
console.log(output);