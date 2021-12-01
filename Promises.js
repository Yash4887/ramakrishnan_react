// Promises

//  Pending

// Resolved

// Rejected

// If Promise is not resolved or rejected that is pending state

const login = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve("accessToken")
        }, 1000)
        
        // Make Requires to database for the data
        
        // if database return data then we have to pass data in resolve function

        // if database throw the error then we have to pass data in rejected function
        // resolve("P1 Resolved")
        // rejected("P1 Rejected")
    })
}

const users = (token) => {
    return new Promise((resolve, reject) => {
        if(!token) {
            reject("Token is not available")
        }
        setTimeout(() => {
            resolve("Users data")
        }, 2000)
        
    })
}

const leftSection = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            // resolve("Left section data")
            rejected("left section rejected")
        }, 2000)
    });
}

const mainSection = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            // resolve("Main section data")
            rejected("main section rejected")
        }, 3000)
    });
}

const rightSection = () => {
    return new Promise((resolve, rejected) => {
        setTimeout(() => {
            // resolve("Right section data")
            rejected("rightSection rejected")
        }, 1000)
    });
}


const userAPI = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve("User info")
            reject("User API Fail")
        }, 1000)
        
    })
}

const instaFeeds = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Insta Feeds")
        }, 3000)
    })
}

const loadInstaPage = async () => {
    try {
        const res = await Promise.allSettled([
            userAPI(),
            instaFeeds()
        ])
        if(res[0].status === "rejected") {
            throw new Error("Full Page Error")
        }
        if(res[0].status === "rejected") {
            // write a code to dipslay error message on Feed Section
        }
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}

loadInstaPage()


// Old javascript syntax
// login()
// .then((val) => {
//     console.log(val);
//     users(val)
//     .then(val1 => {
//         console.log(val1);
//     })
//     .catch(err => {
//         console.log(err);
//     })
// })
// .catch(err => {
//     console.log(err);
// })

// new javascript

const loadData = async () => {
    try {
        console.time("async")
        const res = await Promise.any([
            leftSection(),
            mainSection(),
            rightSection()
        ])

        console.log(res);

        //  Promise All Res

        // [ 'Left section data','Main section data', 'Right section data' ]

        // const leftRes = await leftSection();
        // const mainRes = await mainSection();
        // const rightRes = await rightSection();

        // console.log(leftRes);
        // console.log(mainRes);
        // console.log(rightRes);

        // const loginRes = await login();// 1 sec
        // const userInfo = await users(loginRes); // 2 sec
        // console.log(loginRes);
        // console.log(userInfo);
        console.timeEnd("async")
    } catch (error) {
        console.log(error);
    }
}

// 1. Promise All

// 2. Promise Allsettled

// 3. Promise Race

// 4. Promise any

loadData();

// console.log(p1());

// Are you aware of Token base authentication or OAUTH2?

// Are you aware of API

// write a code to display spinner
// p1()
// .then((val) => {
//     console.log(val);
//     // write a code to display data on page
// })
// .catch(err => {
//     console.log(err);
//     // write a code to display error message
// })
// .finally(() => {
//     // write a code to stop spinner icon...
// })