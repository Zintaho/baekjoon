let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let nums = input[1].split(' ').slice(0,N).map(x=>parseInt(x, 10));
let sorted = [...new Set(nums)].sort((a,b) => a-b);

let bSearch = (arr, v, start=0, end=sorted.length-1) => {
    let mid = start + Math.floor((end-start)/2);
    let a = arr[mid];
    if (a === v) return mid;
    else if (a < v) return bSearch(arr, v, mid+1, end);
    else if (a > v) return bSearch(arr, v, start, mid-1);
}

nums = nums.map(x=>bSearch(sorted, x));

console.log(nums.join(' '));