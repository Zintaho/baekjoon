let N = +require('fs').readFileSync('/dev/stdin').toString().trim();

let sum = 0;
let a= 1;
for (let k = 10; ; k*=10, ++a) {
    if (k > N) {
        sum += (N - k/10 + 1)*a;
        break;
    } else {
        sum += (k*0.9) * a;
    }
}

console.log(sum);