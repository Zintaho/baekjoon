let [N, input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;
let map = {
    '000000' : 'A',
    '001111' : 'B',
    '010011' : 'C',
    '011100' : 'D',
    '100110' : 'E',
    '101001' : 'F',
    '110101' : 'G',
    '111010' : 'H'
}
let output = '';
for (let i = 0; i < N; ++i) {
    let row = input.substring(i*6, i*6+6);
    let c = map[row];
    if (c) output += c;
    else {
        let checked = false;
        let splited = row.split('');
        for (let j = 0; j < 6; ++j) {
            splited[j] = splited[j] === '0'? '1' : '0';
            let cc = map[splited.join('')];
            if (cc) {
                output += cc;
                checked = true;
                break;
            }
            splited[j] = splited[j] === '0'? '1' : '0';
        }
        if (!checked) {
            output = i+1;
            break;
        }
    }
}
console.log(output);