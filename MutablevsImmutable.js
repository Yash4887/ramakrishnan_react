// CRUD(Create/Read/Update/Delete) Operation

const arr =  [...Array(1000).keys()];

const arr1 = [...Array(100).keys()];

console.time("for")
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for")

console.time("merge")
const finalArr = [...arr, ...arr1];
console.timeEnd("merge")


const obj = {
    a: 1,
    b: 2,
    c: 3,
    b: 4,
}

//  1000 property

const newObj = Object.assign({}, obj, { d: 4 });

// console.log(newObj);

// obj.d = 4;

console.log(obj);

// console.log(obj);


// Mutable vs Immutable