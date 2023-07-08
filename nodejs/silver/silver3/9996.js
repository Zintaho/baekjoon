let [N, re, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
re = re.replace('*', "[a-z]*")
re = `^${re}$`;
const reObj = new RegExp(re, 'g');
let output = new Array(+N);
for (let i = 0; i < +N; ++i) {
    output[i] = reObj.test(input[i])?"DA":"NE";
    reObj.lastIndex = 0;
}
console.log(output.join('\n'));