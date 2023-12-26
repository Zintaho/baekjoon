let [NS, input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input = input.split(' ').map(x=>+x);

let [N, S] = NS.split(' ').map(x=>+x);

let [left, right] = [0, 0];
let answer = 100001;
let sum = 0;
while (left <= right && right <= N) {
    if (sum >= S) {
        let d = right - left;
        answer = Math.min(answer, d);
        sum -= input[left];
        left++;
    } else {
        sum += input[right];
        right++;
    }
}
if (answer===100001) console.log(0);
else console.log(answer);