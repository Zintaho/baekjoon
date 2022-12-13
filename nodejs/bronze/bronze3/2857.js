let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
for (i = 1; i<= 5; ++i) {
    let name = input[i-1];
    if(name.indexOf("FBI") !== -1) output.push(i);
}
console.log(output.length > 0 ? output.join(' ') : 'HE GOT AWAY!');