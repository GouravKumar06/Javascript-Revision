console.log("hello" + "Gourav" )          //  helloGourav
console.log("hello : " + "Gourav" )  // hello : Gourav

console.log("1" + 2)  // 12
console.log("1 " + 2)  // 1 2
console.log( typeof ("1 " + 2))        // String

console.log("1 " + 2 + 5)         // 1 25
console.log( typeof ("1 " + 2 + 5))  // String

console.log( 1 + 6 + "2")        // 72  (in this case numbers is first so we give priority to it)
console.log(typeof(1 + 6 + "2"))  // String

console.log(+true)   // 1
console.log(-true);  // -1
console.log(+false)  // 0
console.log(-false)  // -0
console.log(+"")     // 0
console.log(-"")     //-0