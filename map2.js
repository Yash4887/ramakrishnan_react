const arr = [1,2,3,4,5];

//previousValue is output of my previous iteration
const sum = arr.reduce((p, c) => p + c, 0);

console.log(sum);

let result = 0;

for (let i = 0; i < arr.length; i++) {
    result = result + arr[i];
}

console.log(result);

const users = [
    {id: 1, name: 'Yash', gender: 'male', age: 30},
    {id: 2, name: 'Virat', gender: 'male', age: 28},
    {id: 3, name: 'Rohit', gender: 'male', age: 26},
    {id: 4, name: 'Taimur', gender: 'male', age: 08},
    {id: 4, name: 'Alia', gender: 'female', age: 20},
    {id: 5, name: 'Dipeeka', gender: 'female', age: 32},
    {id: 6, name: 'Priyanka', gender: 'female', age: 38},
]

const groupBy = users.reduce((previous, current) => {
    console.log(previous);
    return previous;
}, {})

// GroupBy using reduce
// {
//     male: [{id: 1, name: 'Yash', gender: 'male', age: 30},],
//     female: [{id: 4, name: 'Alia', gender: 'female', age: 20}]
// }


// if record found it will return rohit object
// if not found then return undefined
const rohitInfo = users.find(item => item.name === "Other");

console.log(rohitInfo);

const rohitInfo1 = users.reduce((previous, current) => {
    if(current.name === "Rohit") {
        return current;
    }
    return previous;
}, undefined)

console.log(rohitInfo1);


// const femaleUsers = users.reduce((p, c) => {
//     if(c.gender === "female") {
//         console.log(p);
//         return [...p, c];
//     }
//     console.log(p);
//     return p;
// }, []);

// console.log(femaleUsers);

// const femaleUsers = users.filter(item => item.gender === "other");

// console.log(femaleUsers);

// const index = users.reduce((p, c, index) => {
//     console.log(p);
//     if(c.name === "Rohit") {
//         return index;
//     }
//     return p;
// }, -1)

// console.log(index);

// const index = users.findIndex(item => item.name === "Yagnesh");

// console.log(index);