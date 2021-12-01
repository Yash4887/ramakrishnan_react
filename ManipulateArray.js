// Big O Notation

const arr = [1,2,3,4,5, 6,7];

const finalArr = [
    ...arr.slice(0,3),
    ...arr.slice(3 + 1)
]

console.log(finalArr);

// arr.splice(2, 1, 6)

// console.log(arr);

const arr1 = [6,7,8];

const newArr = [0, ...arr, 6];

console.log(newArr);

const combine = [...arr, ...arr1];

console.log(combine);


// Mutable
// LILO
arr.push(6);

console.log(arr);

arr.pop();

console.log(arr);

// FIFO
arr.unshift(0);

console.log(arr);

arr.shift();

console.log(arr);



