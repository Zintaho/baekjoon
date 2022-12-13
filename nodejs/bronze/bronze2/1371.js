let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let cnt = new Array(26).fill(0);
let aMap = {
    a:0, b:1, c:2, d:3, e:4,
    f:5, g:6, h:7, i:8, j:9,
    k:10,l:11,m:12,n:13,o:14,
    p:15,q:16,r:17,s:18,t:19,
    u:20,v:21,w:22,x:23,y:24,
    z:25,
}
for (let ch of input) if(ch!==' ') cnt[aMap[ch]]++;
let output = '';
let max = 0;
for (let i = 0; i < 26; ++i) {
    if (cnt[i] > max) max = cnt[i];
}
for (let i = 0; i < 26; ++i) {
    if (cnt[i] === max) output += String.fromCharCode(97 + i);
}
console.log(output);