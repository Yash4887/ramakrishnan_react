const arr = [1,2,3,4,5];

console.log(arr.slice(2));

const [a, b, ...rest] = arr;

console.log(a);
console.log(b);

console.log(rest);
