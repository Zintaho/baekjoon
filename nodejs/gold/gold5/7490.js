let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);
let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let N = +input[t];
    let arr = [];
    dfs(N, arr);


    arr.sort();
    output[t] = arr;
}

output.forEach((x,i) => {
    output[i] = x.join('\n');
})
console.log(output.join('\n\n'));

function dfs(N, arr, d=1, seq=[]) {
    if (d === N) {
        seq.push(N);
        let result = seq.join('');
        let origin = result;
        origin = origin.replace(/\s/g, '');

        let temp = '';
        let stack = [];
        let ops = [];
        for (let c of origin) {
            if (c === '+' || c === '-') {
                stack.push(Number(temp));
                temp = '';
                ops.push(c);
            } else temp += c;
        }
        stack.push(Number(temp));
        let sum = stack[0];
        for (let i = 0; i < ops.length; ++i) {
            let op = ops[i];
            switch(op) {
                case '+':
                    sum += stack[i+1];
                    break;
                case '-':
                    sum -= stack[i+1];
                    break;
            }
        }
        if (sum === 0) arr.push(result);
        return;
    }

    dfs(N, arr, d+1, [...seq, d, ' ']);
    dfs(N, arr, d+1, [...seq, d, '+']);
    dfs(N, arr, d+1, [...seq, d, '-']);
}