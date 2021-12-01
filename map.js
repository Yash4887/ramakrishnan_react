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

const index = users.findIndex(item => item.name === "Rohit");

console.log(index);

console.log(users[index]);

const updatedUsers = [
    ...users.slice(0, index),
    {...users[index], age: 32},
    ...users.slice(index + 1)
];

console.log(updatedUsers);

