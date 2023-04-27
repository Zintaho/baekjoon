let [NM, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [N, M] = NM.split(' ').map(x=>+x);

let aCode = 'a'.charCodeAt(0);
const convertToBits = (word) => {
    let bits = new Array(26).fill(0);
    for (let c of word) {
        let k = c.charCodeAt(0) - aCode;
        bits[k] = 1;
    }
    let result = parseInt(bits.join(''), 2);
    return result;
}

for (let i = 0; i < N; ++i) {
    input[i] = convertToBits(input[i]);
}

// Numeric Separator는 ECMAScript2021 부터 사용 가능
let bias = 0b11111_11111_11111_11111_11111_1;
let binMap = {};
let a = 0b10000_00000_00000_00000_00000_0;
let chars = Array.from({length:26}, (_, i) => String.fromCharCode(97 + i));
for (let i = 0; i < 26; ++i) {
    binMap[chars[i]] = a;
    a >>= 1;
}

let aeiou = new Set('a','e','i','o','u');
let output = new Array(M).fill(0);
for (let i = N; i < N+M; ++i) {
    let [cmd, c] = input[i].split(' ');
    if (aeiou.has(c)) continue;
    cmd = +cmd;
    switch (cmd) {
        case 1:
            bias -= binMap[c];
            break;
        case 2:
            bias += binMap[c];
            break;
    }
    let I = i - N;
    for (let j = 0; j < N; ++j) {
        let word = input[j];
        if (word === (word&bias)) output[I]++;
    }
}
console.log(output.join('\n'));