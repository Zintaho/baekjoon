let input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
let [S, K, H] = input.map(x=>parseInt(x, 10));
if (S+K+H >= 100) console.log("OK");
else {
    let m = Math.min(S, K, H);
    switch (m) {
        case S:
            console.log("Soongsil");
            break;
        case K:
            console.log("Korea");
            break;
        case H:
            console.log("Hanyang");
            break;
    }
}