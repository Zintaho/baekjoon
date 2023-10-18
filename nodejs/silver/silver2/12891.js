let [SP, DNA, counts] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
let [S, P] = SP.split(' ').map(x=>+x);
counts = counts.split(' ').map(x=>+x);
counts = {
    A : counts[0],
    C : counts[1],
    G : counts[2],
    T : counts[3]
};

let map = {
    A : 0, C :0, G :0, T :0
};
let substr = DNA.substring(0, P);
for (let i = 0; i < P; ++i) {
    map[substr.charAt(i)]++;
}
let count = () => {
    if (counts.A > map.A) return false;
    if (counts.C > map.C) return false;
    if (counts.G > map.G) return false;
    if (counts.T > map.T) return false;
    return true;
}
let cnt = count()?1:0;
for (let i = 1 ; i <= S-P; ++i ) {
    substr = DNA.substring(i, P+i);
    map[DNA.charAt(i-1)]--;
    map[DNA.charAt(i+P - 1)]++;
    if(count()) cnt++;
}

console.log(cnt);
