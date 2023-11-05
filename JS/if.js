var edad = 18; 

if (edad === 18){
    console.log("Puedes votar. Primer votación"); 
} else if (edad > 18){
    console.log("Puedes votar de nuevo")
} else {
    console.log("Aun no puedes votar"); 
}

// PIEDRA PAPEL O TIJERA
// Esto esta incompĺeto pero se entiende
var opt1 = "Piedra"; 
var opt2 = "Papel";
var opt3 = "Tijera"; 

function play(me, cpu){
    if (me == cpu){
        console.log("Empate!");
    } else if (me == "Piedra" && cpu == "Papel"){
        console.log("CPU gana"); 
    } else if (me == "Tijera" && cpu == "Papel"){
        console.log("me Gana");
    } else if (cpu == "Piedra" && me == "Papel"){
        console.log("me gana"); 
    } else if (cpu == "Tijera" && me == "Papel"){
        console.log("cpu Gana");
    }
}

play (opt1, opt2);