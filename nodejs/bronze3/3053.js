let r = parseInt(require('fs').readFileSync('/dev/stdin').toString().trim(), 10);
console.log((r*r*Math.PI).toFixed(6));
console.log((r*r*2).toFixed(6));