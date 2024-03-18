let input = require('fs').readFileSync('/dev/stdin').toString().trim();

let _check = Number(`0b${'0'.repeat(input.length)}`);

let set = new Set();
dfs();
console.log(set.size);

function dfs(now='', check=_check) {
    if (now.length === input.length) {
        return set.add(now);
    }

    for (let i = 0; i < input.length; ++i) {
        let k = 1 << i;
        if (check !== (check | k)) {
            let c = input.charAt(i);
            let a = now.length-1 >=0 ? now.charAt(now.length - 1): ' ';
            if (a !== c) dfs(now + input.charAt(i), check | k)
        }
    }
}