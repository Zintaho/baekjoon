let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [A,B] = [input[0].length, input[2].length];
let op = input[1];
switch (op) {
    case '+':
        if (A === B) {
            console.log('2' + '0'.repeat(A-1));
        } else if (A > B) {
            console.log('1' + '0'.repeat(A-B-1) + '1' + '0'.repeat(B-1));
        } else if (A < B) {
            console.log('1' + '0'.repeat(B-A-1) + '1' + '0'.repeat(A-1));
        }
        break;
    case '*':
        console.log('1' + '0'.repeat(A+B-2));
        break;
}