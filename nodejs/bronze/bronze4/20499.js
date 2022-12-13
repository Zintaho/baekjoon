let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('/');
let [K,D,A] = input.map(x=>parseInt(x, 10));
if( K + A < D || D == 0) console.log('hasu');
else console.log('gosu');