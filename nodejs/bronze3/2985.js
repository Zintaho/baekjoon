let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [A,B,C] = input.map(x=>parseInt(x, 10));
let funcs = [
    (a,b,c) => [a+b===c, '+', '='],
    (a,b,c) => [a-b===c, '-', '='],
    (a,b,c) => [a*b===c, '*', '='],
    (a,b,c) => [a/b===c, '/', '='],
    (a,b,c) => [a===b+c, '=', '+'],
    (a,b,c) => [a===b-c, '=', '-'],
    (a,b,c) => [a===b*c, '=', '*'],
    (a,b,c) => [a===b/c, '=', '/'],
];
for (let func of funcs) {
    const result = func(A,B,C);
    if (result[0]) {
        console.log(`${A}${result[1]}${B}${result[2]}${C}`);
        break;
    }
}