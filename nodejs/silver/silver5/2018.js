let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let count = 1;

let ceil = Math.ceil(N/2);
let nums = new Array(ceil);
for (let i = 1; i <= ceil; ++i) nums[i-1] = i;

if (N > 2) {
    let [a,b] = [nums.length-2, nums.length-1]; 
    let sum = nums[a] + nums[b];
    while (a >=0 && b >= 0) {
        if (sum === N) {
            count++;
            a--; b--;
            
            sum -= (b-a + 1);
        } else if (sum > N) {
            sum -= nums[b--];
        } else if (sum < N) {
            a--; 
            if (a >= 0) sum += nums[a];
        }
    }
} 

console.log(count);