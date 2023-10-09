let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x,i)=>input[i] = x.split(' ').map(Number));

while (N >= 1) {
    N = check(N);
}

function check(n) {
    if (n === 1) {
        console.log(input[0][0]);
        return 0;
    }


    for (let y = 0, yk=0; y < n; y+=2, yk++) {
        for (let x = 0, xk=0 ; x < n; x+=2, xk++) {
            let sub = [
                input[y][x],
                input[y][x+1],
                input[y+1][x],
                input[y+1][x+1]
            ];
            sub.sort((a,b) => b-a);
            input[yk][xk] = sub[1];
        }
    }

    return n/2;
}