const obj = {
    a: 1,
    b: 2,
    c: 3
}

// for in loop for iterate object
for (const key in obj) {
    console.log(key);
    console.log(obj[key]);
}

// console.log(Object.keys(obj));

// Object.keys(obj).forEach(ele => {
//     console.log(ele);
//     console.log(obj[ele]);
// })