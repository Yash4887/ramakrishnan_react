const users = [
    {id: 1, name: 'Yash', gender: 'male', age: 30},
    {id: 2, name: 'Virat', gender: 'male', age: 28},
    {id: 3, name: 'Rohit', gender: 'male', age: 26},
    {id: 4, name: 'Taimur', gender: 'male', age: 08},
    {id: 4, name: 'Alia', gender: 'female', age: 20},
    {id: 5, name: 'Dipeeka', gender: 'female', age: 32},
    {id: 6, name: 'Priyanka', gender: 'female', age: 38},
]

const age = 33;
const ageGroup = Math.floor(age/10);

console.log(ageGroup);

const key = `${ageGroup}0-${ageGroup}9`;

console.log(key);

const groupByAge = users.reduce((previous, current) => {
    const ageGroup = Math.floor(current.age/10);
    const key = `${ageGroup}0-${ageGroup}9`;
    // const key = current.gender
    console.log(key);
    (previous[key] = previous[key] || []).push(current)
    return previous;
}, {})

console.log(groupByAge);


// {
//    "30-39": [] 
//    "20-29": []
//    "10-19": []
//    "00-09": []
// }




// const obj = {
//     a: 1,
//     b: 2
// }

// console.log(obj['c']);

// obj['c'] = 5;

// console.log(obj);

console.log(!!null);
console.log(!!undefined);
console.log(!!0);

const a = 'hello';

const b = 2;

const c = a || b;

const d = a ?? b;


// And Operator
const e = a && b;

// let result = 1
// if(false) {
//     result = b;
// }

// and condition
const result = a && b;

console.log(result);


console.log(c);
console.log(d);
console.log(e);



const groupBy = users.reduce((previous, current) => {
    (previous[current.gender] = previous[current.gender] || []).push(current)
    // if(previous[current.gender] === undefined) {
    //     previous[current.gender] = []
    // }
    // previous[current.gender].push(current);

    return previous;
}, {})

console.log(groupBy);