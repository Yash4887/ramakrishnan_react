const arr = [
    1,
    2,
    3,
    4,
    5,
]

// O(N)
// O(1) -> 
// O(logN) > 1 === N < 


// O(N)
// O(logN)
let result = false;
for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    if(element === 3) {
        result = true;
        break;
    }
}

console.log(result);

// Set and Map

// WeakSet and WeakMap

// Primitive Types
const set1 = new Set([6,1,2,3,2,3,4,5]);

for (const iterator of set1) {
    console.log(iterator);
}

console.log(set1.size);

const set = new Set();

set.add(1);
set.add(2);
set.add(3);
set.add('hello');

console.log(set.has(2)); 
console.log(set.has('hello')); 

set.delete('hello')

console.log(set.size);

for (const iterator of set) {
    console.log(iterator);
}

const weakSet = new WeakSet();

const obj = { a: 1}
const obj1 = { b: 1}

weakSet.add(obj)
weakSet.add(obj1)

weakSet.delete(obj1);

console.log(weakSet.has(obj1)); 


const map = new Map();

map.set("yagnesh", { name: "yagnesh", age: 30});
map.set("yash", { name: "yash", age: 33});

// console.log(map.get("yash")); 

// console.log(map.has('yash'));

// console.log(map.delete('yash'));

// console.log(map.has('yash'));

for (const [key, value] of map) {
    console.log(key);
    console.log(value);
}


const weakMap = new WeakMap();

weakMap.set(obj, 10);

console.log(weakMap.has(obj));
console.log(weakMap.delete(obj));
console.log(weakMap.has(obj));











