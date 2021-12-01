
const add = (...xyz) => {
    let result = 0;
    for (let i = 0; i < xyz.length; i++) {
        const element = xyz[i];
        result= result + element;
    }
    return result;
    // return a + b + c;
}

console.log(add(1,2,4,5));