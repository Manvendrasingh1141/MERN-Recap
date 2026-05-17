// // x=10;
// // console.log("Value of x is ", x);
// // var x = 10;
// myFunc1();
// // myFunc2(); // undefined()
// function myFunc1(){
//     console.log("Hello from func1");
// }
// // const myFunc2 = ()=> {
// //     console.log("Hello from myFunc2");
// // }
// // myFunc2()

// console.log("Script is stating over here");
// setTimeout(() => {
//     console.log("Hello from setTimeOut");

// }, 0);
// setTimeout(() => {

//     console.log("Hello from setTimeOut 2");
// }, 2000);
// console.log("Script is ending");

// Debounce

// function debounce(func, delay) {
//     let timer;
//     return function (...args) {
//         console.log(args);
//         clearTimeout(timer); // clears previous timers
//         timer = setTimeout(() => { // start a new timer
//             func(...args);
//         }, delay);
//     }
// }
// const searchAPI = (query) => {
//     console.log(`Searching for ${query}`);
// }
// const debounceSearch = debounce(searchAPI, 5000);
// debounceSearch("M");
// debounceSearch("ME");
// debounceSearch("MER");
// debounceSearch("MERN");
// debounceSearch("MERN S");
// debounceSearch("MERN ST");
// debounceSearch("MERN STA");
// debounceSearch("MERN STAC");
// debounceSearch("MERN STACK");
// debounceSearch("MERN STACK Tutorials");


// Throttling

function throttle(func, delay){
    let lastTime = 0;
    return function(...args){
        const presentTime = Date.now();
        if(presentTime - lastTime < delay){
            return
        }
        lastTime = presentTime;
        return func(...args);
    }
}
function chat(message){
    console.log(`Message is ${message}`);
}
const throttleMessage = throttle(chat, 1000);
throttleMessage("Hi");
throttleMessage("Hello");
throttleMessage("Hi again");
throttleMessage("Hello there");