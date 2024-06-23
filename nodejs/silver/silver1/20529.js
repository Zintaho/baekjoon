let [T, ...input] = require('fs').readFileSync(0, 'utf-8').trim().split('\n');
T = +T;

/*
    E:0 I:1
    N:0 S:1
    F:0 T:1
    J:0 P:1
*/
let mbti = {
    ENFJ:0b0000, ENFP:0b0001, ENTJ:0b0010, ENTP:0b0011,
    ESFJ:0b0100, ESFP:0b0101, ESTJ:0b0110, ESTP:0b0111,
    INFJ:0b1000, INFP:0b1001, INTJ:0b1010, INTP:0b1011,
    ISFJ:0b1100, ISFP:0b1101, ISTJ:0b1110, ISTP:0b1111 
}
let getDistance = (A, B, C) => {
    let bits = [mbti[A], mbti[B], mbti[C]];
    let distance = 0;
    for (let i = 0; i < 3; ++i) {
        for (let j = i+1; j < 3; ++j) {
            let xor = bits[i] ^ bits[j];
            let count = 0;
            while (xor !== 0) {
                count += xor & 1;
                xor >>= 1;
            }
            distance += count;
        }
    }
    return distance;
}


let output = new Array(T);
for (let t = 0; t < T; ++t) {
    let N = +input[2*t];
    let arr = input[2*t + 1].split(' ');
    let min = 12;
    if (N >= 33) min = 0;
    else {
        for (let i = 0; i < N; ++i) {
            for (let j = i+1; j < N; ++j) {
                for (let k = j+1; k < N; ++k) {
                    const distance = getDistance(arr[i], arr[j], arr[k]);
                    min = Math.min(min, distance);
                    if (min === 0) break;
                }
                if (min === 0) break;
            }
            if (min === 0) break;
        }   
    }
    output[t] = min;
}
console.log(output.join('\n'));