// console.log("Hello");
// alert("Me");
// document.write("this is document write")
// console.warn("this is warning");
// console.error("This is an error");

// Javascript Variable
// Container to store data value
var number1 = 34;
var number2 = 56;
// console.log(number1 + number2); 

// 4. Datatypes

// String
var str1 = "This is a string";
var str2 = "This is also a string";

// Number
var num1 = 455;
var num2 = 56.76;

// Object
var marks = {
    ravi: 34,
    shubham: 78,
    avhi: 99.977
}

// console.log(marks);

// Booleans
var a = true;
var b = false;
// console.log(a, b);

// var und = undefined;
var und;
// console.log(und);

var n = null;
// console.log(n);

/*
At a very high level, there are two types of datatypes in javascript
1. primitive datatypes : undefined, null, number, string, boolean, symbol
2. Reference datatypes : Array, Objects

*/

// Array

var arr = [1, 2, 3, 4, 5];
// console.log(arr);

// Operators in Javascript

// Arithmetic Operator
var a = 34;
var b = 56;
// console.log("The value of a + b is ", a+b);
// console.log("The value of a - b is ", a-b);
// console.log("The value of a * b is ", a*b);
// console.log("The value of a / b is ", a/b);

// Assignment Operator
var c = b;
// console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
// console.log(x == y);
// console.log(x >= y);
// console.log(x <= y);

// Logical Operators

// Logical AND
// console.log(true && true);
// console.log(true && false);
// console.log(false && false);
// console.log(false && true);

// Logical OR
// console.log(true || true);
// console.log(true || false);
// console.log(false || false);
// console.log(false || true);

// Logical NOT
// console.log(!true);
// console.log(!false);

function avg(a, b) {
    return (a+b)/2;
}

c = avg(4, 6);
// console.log(c);

let myarr = ["Fan", "Camera", 34, null, true];
// Array Method
// console.log(myarr.length);

// myarr.pop();
// console.log(myarr.length);

// myarr.shift(); // first element will remove

// String Method on Javascript
let myString = "Abhi is a good boy";
// console.log(myString.length);
// console.log(myString.indexOf("good"));

// console.log(myString.slice(0, 3));

// console.log(myString.replace("Abhi", "Sumit"));

let myDate = new Date();
// console.log(myDate);

// console.log(myDate.getTime()); // in Second
// console.log(myDate.getFullYear()); // give year
// console.log(myDate.getDay()); // give day
// console.log(myDate.getHours()); // give hours



// DOM (Document Object Module)
let elem = document.getElementById('click');
// console.log(elem);

let elemClass = document.getElementsByClassName("container");
// console.log(elemClass);
// elemClass[0].style.background = "yellow";
elemClass[0].classList.add("bg-primary");
elemClass[0].classList.add("text-success");

// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerHTML);
// console.log(elemClass[0].innerText);

tn = document.getElementsByTagName('button')
// console.log(tn);

createdElement = document.createElement('p');
createdElement.innerText = "This is the created para";

createdElement2 = document.createElement('b');
createdElement2.innerText = "This is the created bold";
// tn[0].appendChild(createdElement);
// tn[0].appendChild(createdElement2);

// tn[0].replaceChild(createdElement2, createdElement);

// removeChild(element); -----> remove an element


// Selecting using Query

sel = document.querySelector('.container')
// console.log(sel);

sel = document.querySelectorAll('.container')
// console.log(sel);

// Events in Javascript

// function clicked() {
//     console.log("The button was clicked");
// }

// window.onload = function() {
//     console.log("the document was loaded");
// }

// firstContainer.addEventListener('click', function(){
//     console.log("click on Container");
// })

// firstContainer.addEventListener('mouseover', function(){
//     console.log("Mouse on Container");
// })

// firstContainer.addEventListener('mouseout', function(){
//     console.log("Mouse out of Container");
// })



// Arrow Functions

// function sum(a, b) {
//     return a+b;
// }

sum = (a, b)=>{
    return a+b;
}

logkaro = ()=>{
    console.log("I am your log");
}

// SetTimeout and setinterval
// setTimeout(logkaro, 2000);

// setInterval(logkaro, 2000);

// clr = setInterval(logkaro, 2000);

// clearInterval(clr); //use clearTimeout/clearInterval to cancel setTimeout/setInterval


// Javascript lacalStorage
// localStorage.setItem('name', 'Abhi');
// localStorage
// localStorage.clear()

// Json
obj = {name: "Abhi", length: 1}
jso = JSON.stringify(obj)
console.log(jso);
console.log(typeof jso);