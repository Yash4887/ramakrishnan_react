const users = [
    {id: 1, name: 'Yash', gender: 'male', age: 30},
    {id: 2, name: 'Virat', gender: 'male', age: 28},
    {id: 3, name: 'Rohit', gender: 'male', age: 26},
    {id: 4, name: 'Taimur', gender: 'male', age: 08},
    {id: 4, name: 'Alia', gender: 'female', age: 20},
    {id: 5, name: 'Dipeeka', gender: 'female', age: 32},
    {id: 6, name: 'Priyanka', gender: 'female', age: 38},
]

// Worst Case Scenario O(N)
// Best Case Scenario O(logN)

// If record found then return index
// else return -1
const index =  users.findIndex(item => {
    // return boolean
    console.log(item.id);
    return item.name === "Rohit"
})


// Worst Case Scenario O(N)
// Best Case Scenario O(logN)

// If record found then return data
// else return undefined
const rohitInfo =  users.find(item => {
    // return boolean
    console.log(item.id);
    return item.name === "Shikhar"
})

console.log(rohitInfo);


// O(N)
// If record found then return array of data
// else return []
const femaleUsers = users.filter(item => {
    return item.gender === 'other'
});

console.log(femaleUsers);

// Worst Case Scenario O(N)
// Best Case Scenario O(logN)

// If record found then return true
// else return false
const isDipeekaExist = users.some(item => {
    return item.name === "kajol"
})
console.log(isDipeekaExist);

// Worst Case Scenario O(N)
// Best Case Scenario O(logN)

// If every condition true then return true
// else return false
const isEveryAdult = users.every(item => {
    console.log(item.id);
    return item.age > 18;
})

console.log(isEveryAdult);



console.log(index);
