// Hoisting

// var a = 1;

// var a = 2;

// var b = 3;

// console.log(a);

// var a, b;

// a = 1;

// a = 2;

// b = 3;

// console.log(a);

// var a = 1;


// var a = 5;

// console.log(a);

// {
//     var a = 1;    
// }

// console.log(a);

// only function scoping is there in old javascript
// function add() {
//     var a = 1; 
//     console.log(a);
// }

// add();

// console.log(a);

// self calling  function
// developer 1;

// var c = 3;

// ((abc) => {
//     var a = 1;  
//     console.log(a);
//     console.log(abc);
// })(c);


// developer 2;
// ((pqr) => {
//     var b = 1;  
//     console.log(b);
//     console.log(pqr);
// })(c);

// console.log(a);