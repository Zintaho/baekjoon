let rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = [];
rl.on('line', (line) => input.push(line))
  .on('close', () => {
    input = input[0];

    let map = {
        P : new Set(),
        K : new Set(),
        H : new Set(),
        T : new Set()
    };

    let result = '';
    for (let i = 0; i < input.length / 3; ++i) {
        let [a, n] = [input[i*3], input[i*3 + 1] + input[i*3 + 2]];
        if (map[a].has(n)) {
            result = "GRESKA";
            break;
        } else {
            map[a].add(n);
        }
    }

    if (result !== "GRESKA") {
        result = [];
        result.push(13 - map.P.size);
        result.push(13 - map.K.size);
        result.push(13 - map.H.size);
        result.push(13 - map.T.size);
        result = result.join(' ');
    }
    console.log(result);

    process.exit();
});