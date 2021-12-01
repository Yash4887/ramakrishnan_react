// map


const arr = [1,2,3,4];

// to update existing data we can use map method
// cant add new record or cant remove existing record

const newArr = arr.map(item => {
    if(item % 2 !== 0) {
        return item * 2
    }
    return item
})

console.log(newArr);

const users = [
    {id: 1, name: 'Yash', gender: 'male', age: 30},
    {id: 2, name: 'Virat', gender: 'male', age: 28},
    {id: 3, name: 'Rohit', gender: 'male', age: 26},
    {id: 4, name: 'Taimur', gender: 'male', age: 08},
    {id: 4, name: 'Alia', gender: 'female', age: 20},
    {id: 5, name: 'Dipeeka', gender: 'female', age: 32},
    {id: 6, name: 'Priyanka', gender: 'female', age: 38},
]




const updatedUsers3 = users.filter(item => item.name !== "Taimur")
console.log(updatedUsers3);

// Dipeeka -> dipika

const updatedUser2 = users.map(item => {
    if(item.name === "Dipeeka") {
        return {...item, name: "Dipika"}
    }
    return item;
})

console.log(updatedUser2);


const updatedUsers1 = users.map(item => {
    if(item.name === "Rohit") {
        return {...item, age: 32}
    }
    return item;
})

console.log(updatedUsers1);

const index = users.findIndex(item => item.name === "Rohit");

console.log(index);

console.log(users[index]);

const updatedUsers = [
    ...users.slice(0, index),
    ...users.slice(index + 1)
];

console.log(updatedUsers);

