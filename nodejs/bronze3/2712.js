let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let N = parseInt(input[0], 10);
let output = '';
for (i = 1; i <= N; ++i) {
    let [k, m] = input[i].split(' ');
    k = Number(k);
    switch (m) {
        case 'kg':
            k *= 2.2046;
            m = 'lb';
            break;
        case 'lb':
            k *= 0.4536;
            m = 'kg';
            break;
        case 'l':
            k *= 0.2642;
            m = 'g';
            break;
        case 'g':
            k *= 3.7854
            m = 'l';
            break;
    }
    k = k.toFixed(4);
    output += `${k} ${m}\n`;
}
console.log(output.trim());
