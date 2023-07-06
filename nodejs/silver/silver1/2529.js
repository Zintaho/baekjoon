let [k, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
k = +k;

input= input.split(' ');

let last = input[0];
let a = 9;
let stack = [];
let queue = [];

let A= '';
for (let i = 1; i <= k; ++i) {
    if (last === '<') stack.push(a--);
    else if (last === '>') queue.push(a--);

    if (i === k) {
        if (last === '<') stack.push(a);
        else if (last === '>') queue.push(a);

        break;
    }

    current = input[i];

    if (last !== current) {
        if (current === '<' && stack.length > 0) {
            queue.push(a);
            while (stack.length > 0) {
                A += stack.pop();
            }
        } else if (current === '>' && queue.length > 0) {
            stack.push(a);
            for (let a of queue) {
                A += a;
            }
            queue = [];
        }
    }

    last = current;
}

console.log(last);

if (last === '<') {
    for (let a of queue) {
        A += a;
    }
    queue = [];
    while (stack.length > 0) {
        A += stack.pop();
    }


} else if (last === '>') {

}

console.log(stack);
console.log(queue);
console.log(A);