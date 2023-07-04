let [N, statement, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
input = input.map(x=>+x);
let stack = [];
for (let c of statement) {
    let k = getNum(c);
    if (k !== -1) {
        stack.push(k);
    } else {
        let [b,a] = [stack.pop(), stack.pop()];

        switch(c) {
            case '+':
                stack.push(a+b);
                break;
            case '-':
                stack.push(a-b);
                break;
            case '*':
                stack.push(a*b);
                break;
            case '/':
                stack.push(a/b);
                break;
        }
    }
}

console.log(stack.pop().toFixed(2));

function getNum(C) {
    const A = 'A'.charCodeAt(0);
    const i = C.charCodeAt(0) - A;
    if (0 > i || i >= 26) return -1;

    return input[i];
}