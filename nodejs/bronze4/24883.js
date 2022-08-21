let c = require('fs').readFileSync('/dev/stdin').toString().trim();
if (c === 'N' || c === 'n') console.log('Naver D2');
else console.log('Naver Whale');