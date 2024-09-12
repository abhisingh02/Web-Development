// if

const isUserLoggedIn = true

// if(isUserLoggedIn) {

// }



// const score = 200

// if(score>100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);


// const balance = 1000

// if(balance > 500) console.log("test"),
// console.log("test2");



// if(balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750) {
//     console.log("less than 750");
// }else if(balance < 900) {
//     console.log("less than 900");
// }else {
//     console.log("less than 1000");
// }


// const userLoggedIn = true
// const debitCard = true
// const loggedInFromGoogle = false
// const loggedInFromEmail = true

// if(userLoggedIn && debitCard) {
//     console.log("Allow to buy course");
// }

// if(loggedInFromGoogle || loggedInFromEmail) {
//     console.log("User logged in");
// }


// ++++++++++++++++Switch +++++++++++++++++++++++++=]

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = 3

// switch (month) {
//     case 1:
//         console.log("January");
//         break;
//     case 2:
//         console.log("Feb");
//         break;
//     case 3:
//         console.log("March");
//         break;
//     case 4:
//         console.log("April");
//         break;

//     default:
//         console.log("default case match");
//         break;
// }


// +++++++++++  truthy   +++++++++++++++++=

const userEmail = "abhi@gmail.com"

if(userEmail) {
    console.log("Got user email");
}else{
    console.log("Don't have user email");
}

// falsy value => flase, 0, -0, BigInt 0n, "", null, undefined, NaN

// truthy value => "0", 'false', " ", [], {}, function(){}