// Immediately Invoked Function Expression (IIFE)

// function chai() {
//     console.log(`DB CONNECTED`);
// }

// chai()

(function chai() {
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    // simple/unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
})('abhi')