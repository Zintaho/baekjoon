let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.slice(0,-2);
let output = [];

let ac = 'a'.charCodeAt(0);
for (let i = 0; i < input.length; i += 2) {
    let result = true;
    let [a,b] = [input[i], input[i+1]];
    if (a.length === b.length) {
        let aArr = new Array(26).fill(0);
        let bArr = new Array(26).fill(0);
        for (let j = 0; j < a.length; ++j) {
            aArr[a.charCodeAt(j) - ac]++;
            bArr[b.charCodeAt(j) - ac]++;
        }
        for (let j = 0; j < 26; ++j) {
            if (aArr[j] !== bArr[j]) {
                result = false;
                break;
            }
        }
    } else {
        result = false;
    }
    result = result?'same':'different';
    result = `Case ${i/2 + 1}: ${result}`;
    output.push(result);
}
console.log(output.join('\n'));