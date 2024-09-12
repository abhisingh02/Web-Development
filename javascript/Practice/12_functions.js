function saymyname() {
    console.log("A");
    console.log("B");
    console.log("H");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("E");
    console.log("K");
}

// saymyname()

function addTwoNumbers(number1, number2) {
    console.log(number1 + number2);
}

// addTwoNumbers(3, 4)
// addTwoNumbers(3, "4")
// addTwoNumbers(3, "a")
// addTwoNumbers(3, null)

// const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2
    // return result
    return number1 + number2
}

const result = addTwoNumbers(3, 5)
// console.log("Result: ", result);

function loginUserMessage(username) {
    if(username === undefined){
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("abhi"));

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2, ...num1) {
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
    username: "abhi",
    price: 199
}

function handleObject(anyobject) {
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
// handleObject({
//     username: "abhi",
//     price: 399
// })

const mynewArray = [200, 400, 100, 600]

function returnSecondValue(getArray) {
    return getArray[1]
}
// console.log(returnSecondValue(mynewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));