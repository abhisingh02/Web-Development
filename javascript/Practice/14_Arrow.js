const user = {
    username: "abhi",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }


}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);

// function chai() {
//     let username = "abhi"
//     console.log(this.username);

// }

// chai()

// const chai = function() {
//     let username = "abhi"
//     console.log(this.username);
// }

// chai()

const chai = () => {
    let username = "abhi"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) => num1 + num2
// const addTwo = (num1, num2) => ( num1 + num2)

const addTwo = (num1, num2) => ({username: "abhi"})

console.log(addTwo(3, 4));


// const myArray = [2, 3, 5, 7, 9]

// myArray.forEach()