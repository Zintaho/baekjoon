let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let [max, answer] = [0, []];
for (let i = Math.ceil(N/2); i <= N; ++i) {
    let arr = [N, i];
    let [j, n] = [2, N-i]
    while(n >= 0) {
        arr.push(n);
        n = arr[j-1] - arr[j];
        j++;
    }
    if (arr.length > max) {
        max = arr.length;
        answer = [...arr];
    }
}
console.log(max);
console.log(answer.join(' '));