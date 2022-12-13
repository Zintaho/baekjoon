let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let i = 0;
if (input.length === 4) console.log(20);
else if(input.length === 3) {
    i = input.indexOf("10") == 0 ? 2 : 0;
    console.log(10 + parseInt(input[i], 10));
} else {
    console.log(parseInt(input[0], 10) + parseInt(input[1], 10));
}