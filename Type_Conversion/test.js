let score = "33"
let value = "44abdcs"
let first = null
let second = undefined

console.log(typeof score) //string
console.log(typeof first) // object
console.log(typeof second)  // undefined

let numberScore = Number(score) // used to change string into number
let numberValue = Number(value)
let numberFirst = Number(first)
let numberSecond = Number(second)

console.log(typeof numberScore)    
console.log(typeof numberValue)
console.log(typeof numberFirst)
console.log(typeof numberSecond)

console.log(numberValue)    // NaN
console.log(numberFirst)    // 0
console.log(numberSecond)   // NaN

/*Summmary
  1. "33" -> 33 (type -> Number)
  2. "33abcfd" -> NaN (type -> Number)
  3. null -> 0 (type -> Number)
  4. undefined -> NaN   (type -> Number)
  5. true -> 1 (type -> Number)
  6. false -> 0 (type -> Number)

*/


//2. Boolean conversion
let loggedIn = undefined
let booleanLoggedIn = Boolean(loggedIn)

console.log(typeof booleanLoggedIn)
console.log(booleanLoggedIn)

/*Summmary
  1. "33" -> true (type -> Boolean)
  2. "" -> false (type -> Boolean)
  3. null -> fasle (type -> Boolean)
  4. undefined -> false   (type -> Boolean)
  5. 0 -> false (type -> Boolean)
  6. 1 -> true (type -> Boolean)

*/
