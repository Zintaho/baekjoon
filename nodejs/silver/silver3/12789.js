let [N, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.split(' ').map(x=>+x).reverse();
let stack = [];

let next = 1;
while (input.length > 0) {
    let q = input[input.length - 1];
    let s = stack.length > 0? stack[stack.length - 1]:0;
    if (q === next) {
        input.pop();
        next++;
    } else if (s === next) {
        stack.pop();
        next++;
    } else {
        input.pop();
        stack.push(q);
    }
}
while (stack.length > 0) {
    let s =  stack[stack.length - 1];
    if (s === next) {
        stack.pop();
        next++;
    } else break;
}
console.log(input.length === 0 && stack.length === 0? "Nice" : "Sad");