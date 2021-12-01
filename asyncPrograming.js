// Javascript is single threaded sync language

//  javascript is using v8 engine developed by google


console.log(1);

// to avoild hold we reqire async process
// some code
// 1 minute



// to achieve async programing 

// 1. Callback

// 2. Promise

// 3. generator


console.log("s1")

setTimeout(() => {
    console.log("as1");
}, 0)

console.log("s2")

console.log("s3")

setTimeout(() => {
    console.log("as2");
}, 50)

console.log("s4");





