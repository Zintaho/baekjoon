let pika = require('fs').readFileSync('/dev/stdin').toString().trim();
pika = pika.replace(/pi|ka|chu/g, '');
console.log(pika.length===0?'YES':'NO');