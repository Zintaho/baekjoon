let [N, ...input] = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
N = +N;

input.forEach((x) => {
    x = x.split('').sort();
    let checks = {};
    for (let i = 0; i < x.length; ++i) {
        let check = {};
        for (let a of x) {
            if (a in check) check[a]++;
            else check[a] = 1;
        }
        check[x[i]]--;
        checks[x[i]] = check;
    }

    for (let i = 1; i < x.length; ++i) {
        let newChecks = {};
        for ([str, check] of Object.entries(checks)) {
            for (let j = 0; j < x.length; ++j) {
                let a = x[j];
                if (check[a] === 0) continue;
                let newCheck = {...check};
                newCheck[a]--;
                newChecks[str+a] = newCheck;
            }
        }
        checks = newChecks;
    }

    console.log(Object.keys(checks).join('\n'));
});
