let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let dic = {
    'a' : 0,
    'b' : 1,
    'k' : 2,
    'd' : 3,
    'e' : 4,
    'g' : 5,
    'h' : 6,
    'i' : 7,
    'l' : 8,
    'm' : 9,
    'n' : 10,
    'z' : 11,
    'o' : 12,
    'p' : 13,
    'r' : 14,
    's' : 15,
    't' : 16,
    'u' : 17,
    'w' : 18,
    'y' : 19
}

const regNG = new RegExp(/ng/g);
input.forEach((x,i) => {
    input[i] = x.replace(regNG, 'z');
});

input.sort((a,b) => {
    let LEN = Math.min(a.length, b.length);

    for (let i = 0; i < LEN; ++i) {
        let [ca, cb] = [a.charAt(i), b.charAt(i)];
        [ca, cb] = [dic[ca], dic[cb]];
        if (ca === cb) continue;
        else {
            if (ca > cb) return 1;
            else return -1;
        }
    }

    if (a.length < b.length) return -1;
    else return 1;
});

const regZ = new RegExp(/z/g);
input.forEach((x,i) => {
    input[i] = x.replace(regZ, 'ng');
});

console.log(input.join('\n'));