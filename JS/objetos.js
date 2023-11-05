var miAuto = {
    marca: "Toyota", 
    modelo: "Corolla", 
    annio: 2020, 
    detalleDelAuto: function(){
        console.log("Auto "+ this.modelo + " " + this.annio);
    }
};

miAuto.marca;
miAuto.detalleDelAuto();

//Si no queremos hacerlo todo de forma manual 
//podemos hacer uso de una función constructora

function auto (MARCA, MODELO, ANNIO){
    this.marca = MARCA;
    this.modelo = MODELO;
    this.annio = ANNIO;
}

var autoNuevo = new auto("Tesla", "Model 3", 2020);
// Esto crea un nuevo auto con mi objeto del tipo auto

// Aquí lo hacemos más con la participación del usuario
var autos = [];
for(let i = 0 ; i < 30 ; i++){
    var marca = prompt("Ingresa la marca del auto");
    var modelo = prompt("Ingresa el modelo del auto");
    var annio = prompt("Ingresa el año del auto");
    autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
    console.log(autos[i]);
}