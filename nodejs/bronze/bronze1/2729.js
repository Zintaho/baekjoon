let [N,...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let output = [];
for (let n = 0; n < +N; ++n) {
    let [A,B] = input[n].split(' ');
    let [ALen, BLen] = [A.length, B.length];
    if (ALen > BLen)  {
        A = `0${A}`;
        B = '0'.repeat(ALen-BLen+1) + B;
    }
    else if (ALen < BLen) {
        A = '0'.repeat(BLen-ALen+1) + A;
        B = `0${B}`;
    } else {
        A = `0${A}`;
        B = `0${B}`;
    }
    let C = new Array(A.length).fill('0');
    
    for (let i = A.length-1; i >= 0; --i) {
        let [a,b,c] = [A[i], B[i], C[i]];
        let cba = c+b+a;
        switch (cba) {
            case '111':
            case '100':
            case '010':
            case '001':
                C[i] = '1';
                break;
            case '110':
            case '101':
            case '011':
            case '000':
                C[i] = '0';
                break; 
        }
        if (i === 0) break;
        switch (cba) {
            case '111':
            case '110':
            case '101':
            case '011':
                C[i-1] = '1';
                break;
            case '100':
            case '010':
            case '001':
            case '000':
                C[i-1] = '0';
                break; 
        }
    }
    while (true) {
        if (C[0] === '0') C.shift();
        else break;
    }
    if (C.length === 0) C = '0';
    else C = C.join('');
    output.push(C);
}
console.log(output.join('\n'));