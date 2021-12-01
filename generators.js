const instaFeeds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Insta Feeds")
        }, 3000)
    })
}

function* abc() {
  try {
    yield instaFeeds();
    yield 2;
    yield 3;
    yield 4;
  } catch (error) {
      console.log(error);
  }
}

const gen = abc();

for (const iterator of gen) {
    console.log(iterator);
}

// console.log(gen.next());
// console.log(gen.next());
// gen.return()
// console.log(gen.next());
// gen.throw("hello")


// Login

// Logout


// Logout

const pqr = async () => {
  // await
};

// function xyz() {

//     // Make api call

//     // Stop execution

//     // Skip execution

//     return "pqr";

//     return "abc"
// }

// console.log(xyz());
