let N = +require('fs').readFileSync('/dev/stdin').toString().trim();
let output = new Array(N);
output[0] = "int a;";
if (N > 0) output[1] = "int *ptr = &a;";
if (N > 1) output[2] = "int **ptr2 = &ptr;";
for (let i = 3 ; i <= N; ++i) {
    output[i] = `int ${'*'.repeat(i)}ptr${i} = &ptr${i-1};`;
}
console.log(output.join('\n'));