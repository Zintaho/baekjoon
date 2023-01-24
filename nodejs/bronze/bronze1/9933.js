let [N,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let set = new Set(input);
let answer = '';
for (let word of set) {
    if (set.has(word.split('').reverse().join(''))) {
        answer = word;
        break;
    }
}
let len = answer.length;
console.log(len, answer.charAt(Math.floor(len/2)));