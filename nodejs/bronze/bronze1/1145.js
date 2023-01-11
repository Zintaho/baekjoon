let n = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);

let min = 97*98*99;
for (let a= 0 ; a < 3; ++a) {
    for (let b = a+1; b < 4; ++b) {
        for (let c= b+1; c < 5; ++c) {
            let [A,B,C] = [n[a], n[b], n[c]];
            let sum = 1;
            let k = 2;
            while (A !== 1 || B !== 1 || C !== 1) {
                let cnt = 0;
                if (A % k === 0) cnt += 4;
                if (B % k === 0) cnt += 2;
                if (C % k === 0) cnt += 1;
                
                switch (cnt) {
                    case 7: A/=k; B/=k; C/=k; sum*= k; break;
                    case 6: A/=k; B/=k; sum *= k; break;
                    case 5: A/=k; C/=k; sum *= k; break;
                    case 3: B/=k; C/=k; sum *= k; break;
                    default: ++k; break;
                }
                if (k > A && k > B && k > C) {
                    sum *= A; sum *= B; sum *= C;
                    break;
                }
            }
            min = Math.min(min, sum);
        }
    }
}
console.log(min);