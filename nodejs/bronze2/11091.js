let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let a = 'a'.charCodeAt(0);

let output = '';
for (i = 1; i <= N; ++i) {
    let chars = new Array(26).fill(0);
    let k = 0;
    for (j = 0; j < input[i].length; ++j) {
        input[i] = input[i].toLowerCase();
        k = input[i].charCodeAt(j) - a
        if(k < 0 || k >= 26) continue;
        chars[k] += 1;
    }
    let missing = '';
    for (j = 0; j < 26; ++j) {
        if(chars[j] == 0) 
            missing += String.fromCharCode(a + j);
    }
    if (missing !== '') {
        output += `missing ${missing}\n`;
    } else {
        output += 'pangram\n';
    }
}
console.log(output);