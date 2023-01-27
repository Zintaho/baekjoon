let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('|')
let last = input[input.length-1];
last = last.charAt(last.length-1);
input = input.map(x=>x.charAt(0));
let [C, A] = [0, 0];
for (let i = 0; i <= input.length; ++i) {
    let c = (i === input.length && C === A)?last:input[i];
    switch(c) {
        case 'C':
        case 'F':
        case 'G':
            C++;
            break;
        case 'A':
        case 'D':
        case 'E':
            A++;
            break;
    }
}
if (C > A) console.log("C-major");
else if (A > C) console.log("A-minor");
