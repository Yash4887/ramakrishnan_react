// OOPS Comcepts

// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism

class User {
    // Special Method -> call only once when create Instance
    constructor (fn, ln, age) {
        console.log(fn);
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// created instance
const yagInfo = new User('Yagnesh', 'Modi', 30);
const viratInfo1 = new User("Virat", "Kohli", 34);

console.log(yagInfo.firstName);
console.log(yagInfo.lastName);
console.log(yagInfo.age);
console.log(yagInfo.fullName());

console.log(viratInfo1.firstName);
console.log(viratInfo1.lastName);
console.log(viratInfo1.age);
console.log(viratInfo1.fullName());

const yagneshInfo = {
    firstName: "Yagnesh",
    lastName: "Modi",
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(yagneshInfo.firstName);
console.log(yagneshInfo.lastName);
console.log(yagneshInfo.age);
console.log(yagneshInfo.fullName());

const viratInfo = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 32,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

// OOPS Comcepts

// 1. Abstraction
// 2. Encapsulation
// 3. Inheritance
// 4. Polymorphism

class User {
    // Special Method -> call only once when create Instance
    constructor (fn, ln, age) {
        console.log(fn);
        this.firstName = fn;
        this.lastName = ln;
        this.age = age;
    }

    set firstName(value) {
        console.log(value);
        console.log(value[0].toUpperCase() + value.slice(1));
        this._firstName = value[0].toUpperCase() + value.slice(1);
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(value) {
        console.log(value);
        console.log(value[0].toUpperCase() + value.slice(1));
        this._lastName = value[0].toUpperCase() + value.slice(1);
    }

    get lastName() {
        return this._lastName;
    }

    fullName() {
        return `${this.firstName} ${this.lastName}`
    }

    changeAge(age) {
        console.log(this.#getAge());
        this.age = age;
    }

    #getAge()  {
        return this.age;
    }

}


class SuperUser extends User {
    constructor () {
        super('super', 'god', 'infine')
    }

    makeThunder() {
       return 'Thunder.....' 
    }
    
}



// created instance
const yagInfo = new User('Yagnesh', 'Modi', 30);
const viratInfo1 = new User("virat", "kohli", 34);

const sp = new SuperUser()

console.log(sp.firstName);
console.log(sp.lastName);
console.log(sp.age);
console.log(sp.makeThunder());

console.log(sp.fullName());

console.log(yagInfo.firstName);
console.log(yagInfo.lastName);
console.log(yagInfo.age);
console.log(yagInfo.fullName());
// console.log(yagInfo.getAge());



yagInfo.changeAge(34);

console.log(yagInfo.age);

yagInfo.changeAge(32);

console.log(yagInfo.age);

console.log(viratInfo1.firstName);
console.log(viratInfo1.lastName);
console.log(viratInfo1.age);
console.log(viratInfo1.fullName());

const yagneshInfo = {
    firstName: "Yagnesh",
    lastName: "Modi",
    age: 30,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

console.log(yagneshInfo.firstName);
console.log(yagneshInfo.lastName);
console.log(yagneshInfo.age);
console.log(yagneshInfo.fullName());

const viratInfo = {
    firstName: "Virat",
    lastName: "Kohli",
    age: 32,
    fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}





