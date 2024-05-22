
const mergeSort = (arr) => {
    if (arr.length === 1) {
        return arr;
    }
    const mid = Math.ceil(arr.length / 2);
    const leftArr = arr.slice(0, mid);
    const rightArr = arr.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merge = (leftArr, rightArr) => {
    const sortedArr = [];
    while (leftArr.length && rightArr.length) {
        leftArr[0] > rightArr[0] ? sortedArr.push(rightArr.shift()) : sortedArr.push(leftArr.shift());
    }
    return [...sortedArr, ...leftArr, ...rightArr];
}

module.exports = {
    mergeSort,
}