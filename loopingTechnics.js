/// looping technics

// 1. for -> fastest

// 2. foreach -> 1 -> slowest

// 3. while

// 4. do while


const arr =  [...Array(1000000).keys()]


console.time("for")
for (let i = 0; i < arr.length; i++) {
}
console.timeEnd("for")

console.time("forEach")
arr.forEach(element => {
});
console.timeEnd("forEach")

console.time("while")
let j = 0
while (j < arr.length) {
    j++;
}
console.timeEnd("while")

console.time("dowhile")
let k = 0
do {
   k++; 
} while (k < arr.length);
console.timeEnd("dowhile")