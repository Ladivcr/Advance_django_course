var frutas = ["Manzana", "Platano", "Cereza"];

console.log(frutas);

console.log(frutas.length) // Para concer la 
// longitud del arreglo

var masFrutas = frutas.push("Uvas")
// Añade elementos al
// final del arreglo

var ultimo = frutas.pop(); 
// Elimina un elemento AL FINAL del 
// Arreglo

var nuevaLongitud = frutas.unshift("Uvas");
// Agrega un elemento al arreglo pero
// al inicio

var borrarFruta = frutas.shift();
// Elimina el primer elemento del arreglo

var posicion = frutas.indexOf("Cereza");
// Me regresa la posición del elemento 
// en el arreglo