let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let cnt = 0;
push(1);
push(2);
console.log(cnt);

function push(n, nums=[]) {

    nums = [...nums, n]
    if (nums.length >= N) {

        let sum = nums.reduce((a,b)=>a+b);
        if (sum%3 === 0) cnt++;
        return;
    }

    push(0, [...nums]);
    push(1, [...nums]);
    push(2, [...nums]);
}