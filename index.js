const fibonacci = require('./src/fibonacci.js');
const mergeSort = require('./src/mergeSort.js').mergeSort;

console.log("\nTesting fibonacci:");
console.log(`fibsRec(7): ${fibonacci.recursive(7)}`);
console.log(`fibs(8): ${fibonacci.iterative(8)}`);

console.log("\nTesting mergeSort:");
console.log(String(mergeSort([3, 2, 1, 13, 8, 5, 0, 1])));
console.log(String(mergeSort([105, 79, 100, 110])), "\n");