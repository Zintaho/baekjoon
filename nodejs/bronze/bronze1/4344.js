let [C, ...input ]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+C);
for (let i = 0; i < +C; ++i) {
    let [N, ...nums] = input[i].split(' ').map(x=>+x);
    let avg = nums.reduce((a,b) => a+b);
    avg /= +N;
    let cnt= 0;
    for (let num of nums) {
        if (num > avg) cnt++;
    }
    cnt /= +N;
    cnt *= 100;
    output[i] = `${cnt.toFixed(3)}%`;
}
console.log(output.join('\n'));