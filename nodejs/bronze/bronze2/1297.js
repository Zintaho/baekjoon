let [D,H,W] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(x=>parseInt(x, 10));
let r= Math.sqrt(D*D / (H*H + W*W));
console.log(`${Math.floor(H*r)} ${Math.floor(W*r)}`);