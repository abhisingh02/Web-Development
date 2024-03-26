
function showAlert() {
    alert("Hello! This is an alert box.");
}

function showPrompt() {
    var result = prompt("Please enter your name:");
    if (result) {
        alert("Hello, " + result + "!");
    } else {
        alert("You did not enter any name.");
    }
}

function showConfirm() {
    var result = confirm("Are you sure you want to proceed?");
    if (result) {
        alert("You clicked OK.");
    } else {
        alert("You clicked Cancel.");
    }
}

function openWindow() {
    window.open("https://www.bing.com/?pc=U316&form=CHROMN", "_blank");
}

function closeWindow() {
    window.close();
}

function printPage() {
    window.print();
}
