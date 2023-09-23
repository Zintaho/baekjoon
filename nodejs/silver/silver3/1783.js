let [N, M] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>+x);
if (M === 1 || N === 1) console.log(1);
else if (N === 2) console.log(M > 8 ? 4 : Math.floor((M+1)/2));
else if (M <= 4) console.log(M);
else if (M === 5) console.log(4);
else if (M >= 6) console.log(M-2);