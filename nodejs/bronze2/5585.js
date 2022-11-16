let N = 1000 - (+require('fs').readFileSync('/dev/stdin').toString().trim());
let money = [500, 100, 50, 10, 5, 1];
let sum = 0;
for (m of money) {
    if (m > N) continue;
    let k = Math.floor(N / m);
    sum += k;
    N -= m*k;
}
console.log(sum);