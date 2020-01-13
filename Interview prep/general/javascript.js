import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants"

// 1. what is scope
// a variable that is accessible everywhere has global scope and a 
//variable that can only be 
// accessed at a particular place has local scope. 


// var globalscope ='global';

// let example =()=>{
//     let local = "local";
//     console.log(local);  'local'
//     console.log(globalscope); 'global'
//     return 1;
// }

// console.log(globalscope);
// // console.log(local); wont work 
// console.log(example());


// 2. what is hosting?
// Hosting is javascript default behaviro of moving variable and 
// function decleration to the top

// console.log(a);//error!


// console.log(x);//show's as undefined
// var x;


// 3. What is a closure;
// A closeure is an inner function that has acces
//  to the outer, or enclosing, funciton's variables. 


// let example3 =(name) =>{
//     var a ='3';

//     function sayHello(){
//         console.log(a +":"+name);
//     }
//     return sayHello
// }

// console.log(example3('hel'))


// 5. what is the difference between synchronous and asynchrous code?
// synchronous code is blocking and asynchronous is not blocking

// console.log('one');
// setTimeout(() => {
//     console.log('3')
// }, 1);
// console.log('lol')



console.log(0.2+0.1)
console.log((0.2+0.1).toFixed(1))
let a = (0.2+0.1).toFixed(1);

console.log(typeof(parseInt(a)))



