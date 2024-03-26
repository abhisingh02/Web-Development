/* variables 

let age;
age = 21;

let firstname = "abhi";


console.log(age);
console.log(firstname);


document.getElementById("mybutton").onclick = function() {
    username  = document.getElementById("mytext").value;
    console.log(username);
}

let a;
let b;
let c;

a = window.prompt("Enter side A");
a = Number(a);

b = window.prompt("Enter side B4");
b = Number(b);

c = Math.pow(a, 2) + Math.pow(b, 2);
c = Math.sqrt(c);

console.log("Side c : ", c);


document.getElementById("submitButton").onclick = function () {
    a = document.getElementById("aTextbox");
    a = Number(a);

    b = document.getElementById("bTextbox");
    b = Number(b);

    c = Math.pow(a, 2) + Math.pow(b, 2);
    c = Math.sqrt(c);

    document.getElementById("cLabel").innerHTML = "side C : " + c;
}
*/

function toCelsius(fahrenheit) {
    return (5 / 9) * (fahrenheit - 32);
}

let value = toCelsius(77);