// Everything in Javascript is an Object.
// const hero = {
//     alias: "Batman",
//     name: "Bruce Wayne",
//     heroCall: function(){
//         return `${this.name} is ${this.alias}`
//     },
// }
// console.log(hero);
let uname = 'Clark Kent';
let number = 10; // let number = new Number(10);
const obj1 = {
    fname: "Diana",
    lname: "Prince",
    fullName(){
        return `${this.fname} ${this.lname}`
    }
}
console.log(obj1)
// Prototypical inheritance
const obj2 = Object.create(obj1)
// const obj2 = {

//     __proto__: obj1, // not recommended
// }
console.log(obj2);
const obj3 = Object.create(obj2);

// To get the prototype of the said object
console.log(Object.getPrototypeOf(uname));
console.log(Object.getPrototypeOf(number));
// console.log(Object.setPrototypeOf(number, proto));

// Prototype -> This is like a blueprint that is sitting on the contructor.
// __proto__ -> a pointer inside each and every object instance that points to that particular blueprint.

