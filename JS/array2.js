var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
]

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500;
})

articulosFiltrados

var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

nombreArticulos


var encuentraArtculo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop";
});

encuentraArtculo

articulos.forEach(function(articulo){
    console.log(articulo.nombre); 
});

var articuloBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});

