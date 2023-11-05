var estudiantes = ["Sofia", "Vidal", "Blanca", "Vidale"];

function saludar(estudiante){
    console.log("HOla " + estudiante);
}

// Esto es como un for i in range de python
for (var i = 0; i < estudiantes.length; i++){
    saludar(estudiantes[i]);
}


// Esto es como un for i in array en python
for (var estudiante of estudiantes){
    saludar(estudiante);
}