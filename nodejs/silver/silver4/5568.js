let [n, k, ...input]= require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

console.log(get_perm_size(input, +k));

function get_perm_size(arr, k) {
    let result = new Set();
    let used = new Array(+n).fill(false);
    backtracking(arr, k, [], used, result);
    return result.size;
}

function backtracking(arr, k, path, used, result) {
    if (path.length === k) {
        result.add(path.join(''));
        return;
    }

    for (let i = 0; i < arr.length; ++i) {
        if (!used[i]) {
            used[i] = true;
            path.push(arr[i]);
            backtracking(arr, k, path, used, result);
            path.pop();
            used[i] = false;
        }
    }
}