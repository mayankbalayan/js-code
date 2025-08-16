const accountId = 14453 
let accountEmail = "mayank@gmail.com"
var accountPassword = "12345"
accountCity = "Delhi"
let accountState

// accountId = 2 // not allowed 

accountEmail = "balayan@gmail.com"
accountPassword = "34566"
accountCity = "jaipur"

console.log(accountId);

/*
prefer not use var 
because of issue in block scope and functional scope 
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
