let [T, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = new Array(+T);

let hasFirst = false;
let first = '';
let rx = undefined;
let result = undefined;
let k = 0;
for (let row of input) {
    if (!hasFirst) {
        first = row.split(' ');
        hasFirst = true;
        rx = new Set();
        result = [];
        continue;
    }
    if (row === "what does the fox say?") {
        for (let i = 0; i < first.length; ++i) {
            if (!rx.has(first[i])) result.push(first[i]);
        }
        
        output[k++] = result.join(' ');
        hasFirst = false;
    } else {
        let [, , sound] = row.split(' ');
        rx.add(sound);
    }
}
console.log(output.join('\n'));