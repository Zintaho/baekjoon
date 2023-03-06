let [N, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let re = new RegExp(/\.[a-z]+$/g);
let map = new Map();
for (let i = 0; i < N; ++i) {
    let filename = input[i];
    let mr = filename.match(re);
    if (mr && mr.length === 1) {
        mr = mr[0];
        if (map.has(mr)) {
            map.set(mr, map.get(mr)+1);
        } else map.set(mr, 1);
    }
}
let arr = Array.from(map);
arr.sort((a,b) => {
    if (b[0] < a[0]) return 1;
    else if (b[0] === a[0]) return 0;
    else if (b[0] > a[0]) return -1;
})

let output ='';
String().su
arr.forEach((x,i) => output += `${x[0].substring(1)} ${x[1]}\n`);
console.log(output);