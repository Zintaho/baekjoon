let [N,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
for (let i = 0; i < +N; ++i) {
    let str = input[i];
    let chars = new Array(26).fill(0);
    let a= 'a'.charCodeAt(0);
    for (let c of str) {
        let k = c.toLowerCase().charCodeAt(0) - a;
        if (k >= 0 && k < 26) {
            chars[k]++;
        }
    }

    let cnt = Math.min(...chars);
    let answer = '';
    switch (cnt) {
        case 0: answer='Not a pangram'; break;
        case 1: answer='Pangram!'; break;
        case 2: answer='Double pangram!!'; break;
        default: answer= 'Triple pangram!!!'; break;
    }

    output.push(`Case ${i+1}: ${answer}`)
}
console.log(output.join('\n'));