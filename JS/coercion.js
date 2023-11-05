// Coerción implicita
4 + "7"
// >> 28
// typeof number
4 * "7"
// >> 47 
// typeof string 

// Coerción explicita
var = a = 20; 
var b = a + ""; 
console.log(b);
// >> 20 
// >> typeof b; 
// >> string

var c = String(a); 
// typeof c
// >> string