// console.log("Hi again from day 3");
// console.error("This is an error from me");
// console.warn("This is a warning");

// let a = 10;
// console.log("The value of a is:", a);
// a = 12;
// console.log("The value of a is:", a);
// const b = 20; 
// console.log("The value of b is", b);
// let hero = {
//     name: "Clark Kent",
//     alias: "Superman",
//     age: 31,
//     powers: ["Heat vision", "Super strength", "Flight", "Intelligence"],
//     allies: {
//         ally1: "Diana Prince",
//         ally2: "Batman",
//         ally3: "Aquaman"
//     },
//     job: function() {
//         console.log("My job is in Daily Planet");
        
//     }
// }
// console.log("Name:", hero.name);

// function printName(name) {
//     console.log("The Name is:", name);
        
// }
// printName("Hal Jordan");

// const name = function(name){
//     console.log("The name is", name);
    
// }
// const name2 = (name) => {
//     console.log(`The name is ${name}`); // template literal
// }
// name("Diana Prince");
// name2("John Stewart");

// DOM - Document Object Model
//  DOM is a way on how the browser sees the HTML page.

document.getElementById('id1').innerText = "<h1>This is a new text</h1>";
document.getElementById('id2').innerHTML = "<h1>This is another new text</h1>";
// getElementsByClass
// getElementByTagName

const btn1 = document.getElementById('btn1');
btn1.addEventListener('click', function(){
    alert("YOUR COMPUTER IS NOW DESTROYED!!!");
}) 
