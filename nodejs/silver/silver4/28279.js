let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let array = new Array(2000001).fill(0);
let [head, tail] = [1000000, 1000000];

let output = new Array();

for (let n = 0; n < N; ++n) {
    let [a, b] = input[n].split(' ').map(Number);
    switch (a) {
        case 1:
            array[head--] = b;
            break;
        case 2:
            array[++tail] = b;
            break;
        case 3:
            if (head === tail) output.push(-1);
            else output.push(array[++head]);
            break;
        case 4:
            if (head === tail) output.push(-1);
            else output.push(array[tail--]);
            break;
        case 5:
            output.push(tail - head);
            break;
        case 6:
            output.push((tail-head)>0? 0 : 1)
            break;
        case 7:
            if (head === tail) output.push(-1);
            else output.push(array[head+1]);
            break;
        case 8:
            if (head === tail) output.push(-1);
            else output.push(array[tail]);
            break;
    }
}

console.log(output.join('\n'))