process.stdin.on('data', (input) => {
    let ABC = input.toString().trim().split(' ').map(x => parseInt(x)).sort((a,b) => a-b);
    process.stdout.write(ABC.join(' '));
    process.exit();
});