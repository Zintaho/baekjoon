let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.forEach((x, i) => {
    x = x.split(' ').map(a=>+a);
    input[i] = x;
})
input.sort((a,b) => a[0] - b[0]);

let t = 0;
for (let i = 0; i < +N; ++i) {
    let [ta, tb] = input[i];
    if (t > ta) ta = t;
    t = ta + tb;
}
console.log(t);