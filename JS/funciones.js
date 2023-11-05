// Declarativas
function miFuncion(){
    return 3;
}

// Expresión 
var miFuncion = function(a,b){
    return a+b;
}

// Llamar función expresiva
miFuncion();

// Llamar función declarativa
miFuncion();

// Example
function saludar(name){
    console.log('Hola ${name}');
}
saludar('Vidale');

