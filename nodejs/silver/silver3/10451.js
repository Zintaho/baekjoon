let [T, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);

for (let t = 0; t < +T; ++t) {
    let [N, arr] = [+input[2*t], input[2*t+1]];
    let check = new Array(N+1).fill(false);
    arr = arr.split(' ').map(x=>+x);
    arr = [0, ...arr];

    let sum = 0;
    for (let i = 1; i <= N; ++i) {
        let a = i;
        let cnt = 0;
        while (true) {
            if (check[a]===true) break;
            check[a]=true;
            a = arr[a];
            cnt++;
        }
        if (cnt > 0) sum++;
    }
    output[t] = sum;
}
console.log(output.join('\n'));