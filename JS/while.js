var estudiantes = ["Sofia", "Vidal", "Blanca", "Vidale"];

function saludar(estudiante){
    console.log("HOla " + estudiante);
}

while(estudiantes.length > 0){
    var estudiante = estudiantes.shift();
    saludar(estudiante);
}