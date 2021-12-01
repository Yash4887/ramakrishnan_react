const obj = {
    a: 1,
    b: 2,
    c: 3
}

// const newObj = Object.assign({}, obj, { d: 4 });

const pqr = {
    p: 1,
    q: 2,
    r: 3
}

// Spread Operator
const newObj = {z: 1, ...obj, b: 4}

const abcPqr = {...obj, ...pqr}

console.log(abcPqr);

console.log(newObj);

// console.log(obj);





