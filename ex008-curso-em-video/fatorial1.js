function fatorial(n) {
    let result = 1;
    for (let i = n; i > 1;i--) {
        result *= i;

    }
    return console.log(result);
}
fatorial(5)


// !n = !n - (n-1)!
// !5 = 5 * 4 *3 * 2 * 1
// !5 = 5*(5-1)!