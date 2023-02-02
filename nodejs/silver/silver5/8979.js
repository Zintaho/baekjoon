let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N,K] = input[0].split(' ').map(x=>+x);
input.shift();
input.forEach((x,i) => {
    x = x.split(' ');
    let k = [1000000n*1000000n, 1000000n, 1n];
    let newArray = new Array(3);
    newArray[0] = +x[0];
    newArray[1] = 0n;
    newArray[2] = 0;
    for (let j=1; j<=3; ++j) {
        newArray[1] += (BigInt(x[j]) * k[j-1]);
    }
    input[i] = newArray;
});
input = input.sort((a,b) => {
    if (a[1] > b[1]) return -1;
    else if (a[1] < b[1]) return 1;
    else return 0;
});
let rank = 0;
let prev = -1n;
let count = 1;
for (let i = 0; i < N; ++i) {
    if (input[i][1] !== prev) {
        rank += count;
        count = 1;
    } else count++;
    
    input[i][2] = rank;

    if (input[i][0] === K) {
        console.log(rank);
        break;
    }

    prev = input[i][1];
}