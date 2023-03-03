let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let cnt = 0;
while (input.length > 1) {
    input = input.split('').reduce((a,b) => (+a) + (+b)).toString();

    cnt++;
}

console.log(cnt);
console.log(+input%3===0?'YES':'NO');