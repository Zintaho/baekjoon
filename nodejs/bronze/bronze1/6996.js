let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = +input[0];
let output = '';
let A = 'a'.charCodeAt(0);
for (let i = 1; i <= N; ++i) {
    let [a,b] = input[i].split(' ');
    let isAnagram = true;
    if (a.length === b.length) {
        let aChars = new Array(26).fill(0);
        let bChars = new Array(26).fill(0);
        for (let j = 0; j < a.length; ++j) {
            aChars[a.charCodeAt(j) - A]++;
            bChars[b.charCodeAt(j) - A]++;
        }
        for (let j = 0 ; j < 26; ++j) {
            if (aChars[j] !== bChars[j]) {
                isAnagram = false;
                break;
            }
        }
    } else isAnagram = false;
    output += `${a} & ${b} are ${isAnagram?'':'NOT '}anagrams.\n`;
}
console.log(output);