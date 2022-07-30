let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
input = input[0];
let numCheck = Array(26);
numCheck.fill(-1);
for (i = input.length - 1; i >=0 ; --i) {
    numCheck[input[i].charCodeAt(0) - 97] = i
}
console.log(numCheck.join(' '));