// const tinderUser = new Object()
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "abhi"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "abhi@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Abhishek",
            lastname: "Singh"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)
const obj3 = {...obj1, ...obj2}

// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    }
]

users[1].email

// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "abhi"

}

// course.courseInstructor

const {courseInstructor} = course

// console.log(courseInstructor);



// ++++++++++++++++++++++++++++++++++====

// const navbar = ({company}) => {

// }

// navbar(company = "abhi")

// +++++++++++++++++++++++++++

// API json

// {
//     "name": "abhi",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]