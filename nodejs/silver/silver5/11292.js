let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

let output = [];

let k = 0;
while (true) {
    let n = +input[k++];
    if (n === 0) break;

    let [names, max] = [[], 0];
    for (let i = 0; i < n; ++i) {
        let [name, height] = input[k++].split(' ');
        height = Number(height);
        if (height > max) {
            names = [name];
            max = height;
        } else if (height === max) {
            names.push(name);
        }
    }
    output.push(names.join(' '));
}
console.log(output.join('\n'));