const myArr = [0, 1, 2, 3, 4, 5]

// console.log(myArr[0]);

const myHeros = ["Shaktiman", "Naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// ++++++++++++= Array Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)

// myArr.shift(9)

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

const newArr = myArr.join()

// console.log(myArr);
// console.log(newArr);
// console.log(typeof(newArr));

// ++++++++ slice, splice

// console.log("A ", myArr);

// const myn1 = myArr.slice(1, 3)

// console.log(myn1);
// console.log("B ", myArr);

// const myn2 = myArr.splice(1, 3)
// console.log(myn2);


const marvel = ["thor", "Ironman", "Spiderman"]
const dc = ["Superman", "Batman", "Flash"]

// marvel.push(dc)

// console.log(marvel);
// console.log(marvel[3][1]);

// const allHeros = marvel.concat(dc)

// console.log(allHeros);

const all_newHeros = [...marvel, ...dc]
// console.log(all_newHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_anotherArr = anotherArr.flat(Infinity)

// console.log(real_anotherArr);

// console.log(Array.isArray("Abhi"));
// console.log(Array.from("Abhi"));

// console.log(Array.from({name: "Abhi"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));