let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');
let stack = [];

let num = [];

let sum = 0;

// (2 * (2 + (3 * 3))) + (2 * 3)

for (let p of input) {
    if (p === '(' || p === '[') stack.push(p);
    else {
        const last = stack.length>0?stack[stack.length - 1]:undefined;
        if (!last) {stack.push(undefined); break;}

        let k = undefined;
        if (p === ')') {
            if (last !== '(') {stack.push(p); break;}
            stack.pop();
            k = 2;

        } else if (p === ']') {
            if (last !== '[') {stack.push(p); break;}
            stack.pop();
            k= 3;
        }

        if (!k) break;
        let a = [stack.length, k];
        if (num.length === 0 || num[num.length - 1][0] < a[0]) {
            num.push(a);
        } else {
            while (true) {
                let b = num.length>0?num.pop():undefined;
                if (b === undefined) {
                    num.push(a);
                    break;
                }

                if (a[0] < b[0]) a = [a[0] , a[1] * b[1]];
                else if (a[0] === b[0]) {
                    a = [a[0], a[1] +  b[1]];
                    num.push(a);
                    break;
                } else {
                    num.push(b);
                    num.push(a);
                    break;
                }
            }
        }
    }
}
if (num.length > 0 && stack.length === 0) {
    sum = num[0][1];
}

console.log(sum);

