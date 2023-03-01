let arr = [1, 1, 1, 1];

const allEqual = arr => arr.every( v => v === arr[0] );

console.log(allEqual(arr))