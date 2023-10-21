let [s, n] = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');
s = +s;

let horz = (` ${'-'.repeat(s)}  `.repeat(n.length).trimEnd()+' ').split('');
let vert = `|${' '.repeat(s)}| `.repeat(n.length).trimEnd().split('');

let def = Array.from({length:2*s + 3}, _ => [...vert]);
def[0] = [...horz];
def[s+1] = [...horz];
def[2*s + 2] = [...horz];

for (let i = 0; i < n.length; ++i) {
    let c = n.charAt(i);
    switch(c) {
        case '1':
            for (let j = 0; j < 2*s + 3; ++j) {
                def[j][(s+3) * i] = ' '; 
                for (let ss = 1; ss <= s; ++ss) {
                    def[j][(s+3) * i + ss] = ' '; 
                }
            }
            break;
        case '2':
            for (let j = 0; j < s+1; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            for (let j = s+2; j < 2*s+ 2; ++j) {
                def[j][(s+3) * i + s + 1] = ' '; 
            }
            break;
        case '3':
            for (let j = 0; j < 2*s + 3; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            break;
        case '4':
            for (let ss = 1; ss <= s; ++ss) {
                def[0][(s+3) * i + ss] = ' '; 
                def[2*s+2][(s+3) * i + ss] = ' '; 
            }
            for (let j = s+2; j < 2*s+ 2; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            break;
        case '5':
            for (let j = s+2; j < 2*s+ 2; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            for (let j = 0; j < s+1; ++j) {
                def[j][(s+3) * i + s + 1] = ' '; 
            }
            break;
        case '6':
            for (let j = 0; j < s+1; ++j) {
                def[j][(s+3) * i + s + 1] = ' '; 
            }
            break;
        case '7':
            for (let j = 0; j < s+1; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            for (let ss = 1; ss <= s; ++ss) {
                def[s+1][(s+3) * i + ss] = ' '; 
                def[2*s+2][(s+3) * i + ss] = ' '; 
            }
            for (let j = s+2; j < 2*s+ 2; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            break;
        // pass if '8'
        case '9':
            for (let j = s+2; j < 2*s+ 2; ++j) {
                def[j][(s+3) * i] = ' '; 
            }
            break;
        case '0':
            for (let ss = 1; ss <= s; ++ss) {
                def[s+1][(s+3) * i + ss] = ' '; 
            }
            break;
    }
}

print();

function print() {
    def.forEach((x, i) => def[i] = x.join('') );
    console.log(def.join('\n'));
}