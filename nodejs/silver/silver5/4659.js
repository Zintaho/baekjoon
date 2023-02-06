let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
let regexes = [
    [new RegExp(/[aeiou]{1}/), false],
    [new RegExp(/[aeiou]{3,}/), true],
    [new RegExp(/[^aeiou]{3,}/), true],
    [new RegExp(/aa|bb|cc|dd|ff|gg|hh|ii|jj|kk|ll|mm|nn|pp|qq|rr|ss|tt|uu|vv|ww|xx|yy|zz/), true]
]

for (let pw of input) {
    if (pw === "end") break;
    let acceptable = true;
    for (let [regex, b] of regexes) {
        if ((pw.match(regex) !== null) === b) {
            acceptable = false;
            break;
        }
    }

    output.push(`<${pw}> is ${acceptable?'':'not '}acceptable.`);
}
console.log(output.join('\n'));