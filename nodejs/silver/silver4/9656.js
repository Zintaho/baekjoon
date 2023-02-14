let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let name = ["SK", "CY"];
let [a,b] = [parseInt(N/3)%2, N%3];
console.log(name[(a+b)%2]);