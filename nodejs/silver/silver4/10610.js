let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

let result = false;

let solve = () => {
    let t3 = 0;
    let t10 = false;
    input.forEach((x) => {
        x = +x;
        t3 += x;
        if (x === 0) t10 = true;
    });
    if (t3%3 !== 0 || !t10) return;

    result = true;
    input.sort((a,b) => b-a);
}
solve();

console.log(result?input.join(''):-1);
