// Object

const firstName = "Yash";

const lastName = "Modi";

const age = 30;

// Old javascript
// const yash = {
//     firstName:'Yash',
//     lastName: 'Modi',
//     age: 30,
//     fullName: function() {
//         return `${this.firstName} ${this.lastName}`
//     }
// }

const yash = {
    firstName,
    lastName,
    age,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(yash.firstName);
console.log(yash.lastName);
console.log(yash.age);
console.log(yash.fullName());

// OOPS

// 1. Encapsulation

// 2. Inheritance

// 3. Abstraction

// 4. Polymorphism