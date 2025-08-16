// console.log(2>1);
// console.log(2>=1);
// console.log(2==1);
// console.log(2!=1);
// console.log(2<1);

//console.log("2" > 1);  // prefer to compare same datatypes because sometimes answer become unpridectable 

// avoid these comparision null and undefined beacause clean code is preferable 
// console.log(null>0); // false
// console.log(null>=0); // true
// console.log(null==0);  // false


// The reason is that an equality check == and comparisons >, <, >=, <= work differently.
// Comparisons convert null to a number, treating it as 0.
// That’s why (3) null >= 0 is true and (1) null > 0 is false.



// ===  is not only checks the value but check it strictly means also its data type 

console.log("2"===2);

