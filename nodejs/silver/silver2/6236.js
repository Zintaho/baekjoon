let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let [left, right] = [0, 1_000_000_000];
input.forEach((x,i)=>{
    x = +x;
    input[i] = x;
});

let answer = 0;
while (left <= right) {

    let mid =  Math.floor((left+right) / 2);
    let purse = mid;
    let count = 1;

    let check = true;
    for (let n = 0; n < N; ++n) {
        let cost = input[n];

        if (mid < cost) {
            left = mid+1;
            check = false;
            break;
        }
        if (purse < cost) {
            count++;
            purse = mid;
        } 

        purse -= cost;
    }
    if (!check) continue;
    
    if (count > M) left = mid+1;
    else {
        answer = mid;
        right = mid-1;
    }

}
console.log(answer);