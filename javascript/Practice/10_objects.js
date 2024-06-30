// singleton - make when we use constructor

// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Abhi",
    "full name": "Abhishek Singh",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaunpur",
    email: "abhi@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mySym]);

JsUser.email = "abhi@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "abhi@msoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS User");
}

console.log(JsUser.greeting());

JsUser.greetingTwo = function(){
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());