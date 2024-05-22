

const fibs = (n) => {
    let fib1 = 0;
    let fib2 = 1;
    // Two fibonacci numbers are already declared, i = 2
    for (let i = 2; i < n; i++) {
        let newFib = fib1 + fib2;
        fib1 = fib2;
        fib2 = newFib;
    }
    return fib1 + fib2;
}

const fibsRec = (n) => {
    if (n <= 2) return 1;
    return fibsRec(n - 2) + fibsRec(n - 1);
}

/*

console.log(fibs(7));
console.log(fibs(37));
console.log(fibs(8));
console.log(fibs(60));
console.log(fibs(40));

console.log(fibsRec(7));
console.log(fibsRec(37));
console.log(fibsRec(8));
// Too slow for 60 lol
// console.log(fibsRec(60));
console.log(fibsRec(40));

*/


module.exports = {
    iterative: fibs,
    recursive: fibsRec,
}