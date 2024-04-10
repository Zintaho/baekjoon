let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let set = new Set();

let output = new Array(+N);
input.forEach((x, h) => {
    let words = x.split(' ');
    let chars = x.split('');

    let [start, end] = [0, -1];
    for (let i = 0; i < words.length; ++i) {
        [start, end] = [end+1, end+1+words[i].length];
        let word = words[i];
        let top = word.charAt(0).toLowerCase();
        if (!set.has(top)) {
            set.add(top);
            chars[start] = `[${chars[start]}]`;
            output[h] = chars.join('');
            return;
        }
    }

    [start, end] = [0, -1];
    for (let i = 0; i < words.length; ++i) {
        [start, end] = [end+2, end+1+words[i].length];
        let word = words[i].substring(1);

        for (let j = 0; j < word.length; ++j) {
            let c = word[j].toLowerCase();
            if (!set.has(c)) {
                set.add(c);
                chars[start + j] = `[${chars[start + j]}]`;
                output[h] = chars.join('');
                return;
            }
        }
    }
    output[h] = chars.join('');
});
console.log(output.join('\n'));