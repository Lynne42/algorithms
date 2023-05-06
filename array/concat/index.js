function forLoop(arr) {
    const newArr = [];
    for(let i = 0, len = arr.length; i < len; i++) {
        newArr.push(arr[i])
    }
    return newArr
}

function arrayFrom(arr) {
    return Array.from(arr)
}

function arraySlice(arr) {
    return arr.slice()
}

function arrayConcat(arr) {
    return [].concat(arr)
}

const largeData = Array(500000);

console.time('forLoop')
forLoop(largeData);
console.timeEnd('forLoop')

console.time('arrayFrom')
arrayFrom(largeData);
console.timeEnd('arrayFrom')

console.time('arraySlice')
arraySlice(largeData);
console.timeEnd('arraySlice')

console.time('arrayConcat')
arrayConcat(largeData);
console.timeEnd('arrayConcat')

