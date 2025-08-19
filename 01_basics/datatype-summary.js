// 2 types of data type one is primitive and second is non primitive 
// primitive 
// 7 types 
//  string , number , boolean , null , undefined , symbol, BigInt

// const id = Symbol('123')


// non premitive or reference type 

// Array , objects, functions 

const heroes = ["shaktiman" , "dogo" , "mayank"]; // array

// objects 
let myobj = {
    name: "mayank",
    age : 18,
}

// function 
const myfunction = function(){
  console.log("hello js world");
  
}
const score = 100
console.log(typeof score);

// studypart
// https://262.ecma-international.org/5.1/#sec-11.4.3



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) // original value copy is made , heap (non-primitive) // reference of original value 

let myyoutubename = "mayankbalayandotcom"

let anothername = myyoutubename
anothername = "Balayan"

console.log(myyoutubename);// copies are made in stack original value is same
console.log(anothername);

// object store in heap and reference is provided 
let userOne = {
    email : "user@google.com",
    upi : "user@ibl"
}

let userTwo = userOne

userTwo.email = "balayan@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);

