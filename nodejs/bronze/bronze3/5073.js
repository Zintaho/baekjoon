let input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
input.pop();
let output = new Array(input.length);
for (let i = 0; i < input.length; ++i) {
    let triangle = input[i].split(' ').map(x=>+x);
    triangle.sort((a,b) => b-a);
    let [a,b,c] = triangle;
    let result = ""
    if (a >= b+c) result = "Invalid";
    else if (a===b && b===c) result = "Equilateral";
    else if (a===b && b!==c) result = "Isosceles";
    else if (a!==b && b===c) result = "Isosceles";
    else result = "Scalene";

    output[i] = result;
}
console.log(output.join('\n'));