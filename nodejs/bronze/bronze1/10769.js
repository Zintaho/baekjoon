let input = require('fs').readFileSync('/dev/stdin').toString();
let emotion = 0;
let emoted = false;
let cnt = 0;
for (let c of input) {
    switch (cnt) {
        case 0:
            if (c === ':') cnt++;
            break;
        case 1:
            if (c === '-') cnt++;
            else cnt = 0;
            break;
        case 2:
            if (c === ')') emotion++;
            else if (c === '(') emotion--;

            if (c === ')' || c === '(') emoted = true;
            cnt = 0;
            break;
    }
}

let result = 'unsure';
if (emoted) {
    if (emotion > 0) result = 'happy';
    else if (emotion < 0) result = 'sad';
} else result = 'none';

console.log(result);