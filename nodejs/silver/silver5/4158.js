let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = []
for (let i = 0; i < input.length; ) {
    let [N, M] = input[i].split(' ').map(Number);
    if (N * M === 0) break;

    let count = 0;
    let [n, m] = [0, 0];
    
    let target = input.slice(i+1, i+N+M+1).map(Number);
    while ((n < N) && (m < M)) {
        let [a, b] = [target[n], target[m+N]];
    
        if (a === b) {
            n++;
            m++;
            count++;
        } else if (a < b) n++;
        else if (a > b) m++;
    }
    
    output.push(count);

    i += (N+M+1);
}

console.log(output.join('\n'));