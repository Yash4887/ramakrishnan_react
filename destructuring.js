const obj = {
    a: 1,
    b: 2,
    c: 3
}

const a = 5;

const key = 'b';

// destructure

const { a: aa, [key]: bb, c } = obj;

console.log(a);
console.log(aa);
console.log(bb);
console.log(c);

// Dot Notation
console.log(obj.a);
console.log(obj.b);
console.log(obj.c);


// Array Notation
console.log(obj['a'])
console.log(obj[key])
console.log(obj['c'])