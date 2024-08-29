const accontId = 123456
let accountEmail = "veer@gmail.com"
var accountPassword = "12345"
accountCity = "Lucknow"
let accountState;

// accontId = 2 // not allowed

accountEmail = "vr@.com"
accountPassword = "212121"
accountCity = "Delhi"


/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accontId, accountEmail, accountPassword, accountCity,  accountState])


