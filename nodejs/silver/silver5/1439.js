let input = require('fs').readFileSync('/dev/stdin').toString().trim();
let map = {"01":0, "10":0, "00":0, "11":0};
for (let [a,b] = [0, 1]; b < input.length; [a,b] = [a+1, b+1]) {
    map[input.substring(a,b+1)]++;
}
console.log(Math.max(map["01"], map["10"]));