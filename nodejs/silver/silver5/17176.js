let [N, cipher, plain] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

let map = {' ':0}

let A = 'A'.charCodeAt(0);
for (let i = 1; i <= 26; ++i) {
    map[String.fromCharCode(A + (i-1))] = i;
}
let a = 'a'.charCodeAt(0);
for (let i = 1; i <= 26; ++i) {
    map[String.fromCharCode(a + (i-1))] = i+26;
}

let [ciphers, plains] = [new Array(53).fill(0), new Array(53).fill(0)];
cipher.split(' ').forEach((x) => {ciphers[+x]++;});
plain.split('').forEach((x) => {plains[map[x]]++;});

let result = true;
for (let i = 0; i < 53; ++i) {
    if (ciphers[i] != plains[i]) {
        result = false;
        break;
    }
}
console.log(result?'y':'n');
