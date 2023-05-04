let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x, i) => input[i] = x.split(' ').map(x=>(+x + 1)));
let output = [0,0,0];
let check = (K, x = 0 , y = 0) => {
    if (K === 1) {
        output[input[y][x]]++;
        return;
    } 
    let isPure = true;
    let c = input[y][x];
    for (let j = y; j < y+K; ++j) {
        for (let i = x; i < x+K; ++i) {
            if (c != input[j][i]) isPure = false;
            if (!isPure) break;
        }
        if (!isPure) break;
    }
    if (isPure) output[c]++;
    else {
        let k = K/3;
        check(k, x, y);
        check(k, x + k, y);
        check(k, x + 2*k, y);

        check(k, x, y + k);
        check(k, x + k, y + k);
        check(k, x + 2*k, y + k);

        check(k, x, y + 2*k);
        check(k, x + k, y + 2*k);
        check(k, x + 2*k, y + 2*k);

    }
}
check(+N);
console.log(output.join('\n'));