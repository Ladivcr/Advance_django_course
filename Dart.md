# Historia de Dart 

- Desarrollado por Google
> Presentado en 2011 como una alternativa más moderna a Javascript

- Influencia
> Toma las bases modernas de lenguajes como: Java, C#, Ruby y hasta TypeScript

- Dart VM
> Es la máquina virtual donde se ejecuta el código necesario para el desarrollo y podemos encontrarla en SO como Windows, Mac o Linux

- Multiplataforma
> Web gracias al convertidor dart2js y Nativo gracias a Flutter y dart2native

# ¿Cómo funciona Dart? 

- Just-in-Time
> Agregar recursos de desarrollo que facilitan la ejecución y debugueo (hot reload) 

- Ahead-of-Time
> Optimiza las aplicaciones y remueve recursos innecesarios, creando compilaciones más rápidas


La comparación que podemos hacer entre ambos es que **Just in time** es lento al inicio pero nos ayuda en la parte de programación y 
**ahead of time** hace las aplicaciones más rápidas desde el momento en que las publicamos en las tiendas o las distribuimos. 

# ¿Por qué usar Dart? 
- Respaldo: Es de código abierto y Google está invirtiendo muchos recursos en su uso 
- Comunidad: Crece día a día gracias a Flutter y su curva de aprendizaje es muy corta

# Dónde encontrar más información 
- Web oficial: La documentación, ejemplos y actualizaciones están disponibles en www.dart.dev
- Paquetes: El repositorio oficial de paquetes es www.pub.dev para aplicaciones Dart y Flutter

# Tipos de datos BÁSICOS en Dart
- **booleano** 
```Dart
bool esta_soleado = true;
```

- **int** o **double**
> El double ocupa más memoría pero puede almacenar los dos tipos.
> Cuando queremos almacenar números con decimales usamos double. 
```Dart
int edad = 20;
double estatura = 1.83;
```

- **String**
> Se coloca entre "comillas dobles" y es le primer tipo de datos que se coloca con mayúsculas porque no es primitivo 
```Dart
String pais = "México";
```

- **Colecciones** - List
> Permite almacenar muchos valores de un mismo tipo a la vez en una misma variable. La palabra reservada es **List**
> > Se coloca el tipo entre **<>** y los valores entre **[]**

```Dart
List<String> amigos = ["Kalid", "Gus", "Toño", "JLuis"];
```

# Tipos de datos AVANZADOS en Dart

- **var**
> **Inferencia**: Son cambiados en tiempo de compilación por la computadora
> **Comodín**: Es una forma de usar un comodín que permite despreocuparse por la declaración 

```Dart
var nombre = "Vidal"; 
nombre = "Victor"; 
```
- **final** vs **const**
> **Inmutabilidad**: Son variables de solo lectura, una vez que se le asigna un valor, no puede ser cambiado 
> **Diferencias**: _const_ debe ser conocido en tiempo de compilación y _final_ no

```Dart
const nombre = "Vidal"; 
final pi = 3.14; 
```

- **dynamic**
> **Inferencia**: Es igual que el _var_, Dart infiere el tipo de dato 
> **Mutabilidad**: Puede cambiar su tipo en cualquier momento, debe usarse solo en caso específico, porque es mucha responsabilidad

```Dart
dynamic nombre = "Vidal"; 
nombre = "ladiv";
nombre = 04;
```

- **final/const** NO pueden cambiar el tipo ni el valor
- **var** NO puede cambiar el tipo pero SI el valor
- **dynamic** puede cambiar el tipo de dato y el valor

# Cómo comentar el código 

- // Para las líneas
- /* para los bloques */

# Concatenación e interpolación 
> Es la forma de unir dos String para formar uno más grande

- **Concatenación** se usa el símbolo **+**
- **Interpolación** se usa el símbolo **$**

```Dart
void main(){
  String nombre = "Vidale"; 
  String pais = "Cánada";

  String result = "Soy " + nombre + " y vivo en " + pais;
  print(result); 
}
>> Soy Vidale y vivo en Cánada
```

```Dart
void main(){
  String nombre = "Vidale"; 
  String pais = "Cánada";

  String result = "Soy $nombre y vivo en $pais";
  print(result); 
}
>> Soy Vidale y vivo en Cánada
```
# Carácteres especiales

```Dart
void main(){
  String nombre = "Vidale"; 
  String pais = "Cánada";

  String result = "Soy \"$nombre\"\ny vivo en $pais";
  print(result); 
}
>> Soy "Vidale"
>> y vivo en Cánada
```
# Funciones 
Es una acción que aplicamos sobre una variable y nos da un resultado
- Ejemplos: **toUpperCase**: Cambiar todo por mayúsculas; **toLowerCase**: Cambiar todo por minúsculas; **replaceAll**: Reemplaza palabras enteras
> Estas funciones hacen el cambio pero no "inplace", si queremos conservar el cambio tendríamos que capturarlo en otra variable 

```Dart
void main(){
  String nombre = "Vidale";
  print(nombre.toLowerCase()); 
  > vidale
  print(nombre.toUpperCase()), 
  > VIDALE
  
  String pais = "Cánada";

  String result = "Soy \"$nombre\"\ny vivo en $pais";
  result = result.replaceAll("Cánada", "México"); 
  print(result); 
}
>> Soy "Vidale"
>> y vivo en México
```
también podemos decirle a .replaceAll() que cambie espacios por algún signo. 

# Conversión de tipos

- **String to number**: Cuando tenemos un número como texto y necesitamos aplicar operaciones sobre él

Se utiliza el método: **int.parse()** y/o **double.parse()**

- **number to String**: Cuando un número debe ser convertido a un String

Casi todas las variables tienen un método **toString()** que convierte en texto el valor

- **Casos especiales**: Cuando las conversiones no son posibles se determina un error en tiempo de ejecución 

La aplicación puede terminar abruptamente con un _Script error_ 


```Dart
void main(){
  String texto = "12"; 
  int numero = int.parse(texto);
  print(numero); 
}
>> 12
> Lo mismo con double: double.parse(texto)
```

```Dart
void main(){
  int numero = 12; 
  String texto = numero.toString(); 
  print(texto); 
}
>> 12
```

# Operaciones 

- **+**: Suma
- **-**: Resta
- **-expr**
- __*__
- **/**: División
- **~/**: **Resultado** entero de una división 
- **%**: **Residuo** entero de una división 

# Asignación 

- **Qué son:** Son operaciones aritméticas abreviadas
- Ejemplo: +=, -=, *=, /=, ~/= y %=

```Dart
void main(){
  int valor1 = 8; 
  int valor2 = 2; 
  // si hacemos 
  valor1 = valor1+valor2;
  >> valor1 = 10
  // lo podemos reescribir con asignación de la siguiente forma
  valor1 += valor2;
  >> valor1 = 10
}

```

# Relacionales 

- **Qué son:** Son expresiones de comparación que requieren 2 números que retorna un resultado booleano 
- Ejemplo: ==, =!, =>, >, < y <= 

Funcionan exactamente iguales que en otros lenguajes como Python 

# Lógicas

- **Qué son:** Son expresiones lógicas que requieren 1 o 2 booleanos y retornan un resultado booleano 
- Ejemplo: || (or), && (and), ! (not) y ?:
> Este último se conoce como operador ternario y su estructura es algo como: _condicional_ ? _verdadero_ : _falso_

# Condicionales 

```Dart
int tieneMascota = 1;
  
if (tieneMascota == 0) {
    print("No tiene mascota");
} else if (tieneMascota == 1) {
    print("tiene una mascota");
} else {
    print("Tiene muchas mascotas");
  }
```

```Dart
switch (variable) {
case 0: 
  logic; break; 
case 1: 
  logic; break; 
  .
  .
  .
 default:
  logic; 
}
```

# Ciclos

- **while**

```Dart
while(expr) {
  // código while
}

```

```Dart
void main(){
  int tazasDeCafe = 0; 
  int maximo = 3; 
  while(tazasDeCafe < maximo) {
  // código while
  tazasDeCafe++;
  print("Cantidad de tazas: $tazasDeCafe");
  }
}
>> Cantidad de tazas: 1
>> Cantidad de tazas: 2
>> Cantidad de tazas: 3
```

- **Do While**
> Es similar a while, sin embargo la expresión es evaluada en la segunda iteración

```Dart
do{
// Código do while
}while(expr);
```

- **For**
> Permite crear un ciclo de repetición en base a un índice que puede ser incremental o decremental 

```Dart
for (int i = 0; i < x; i++){
  // Código for
}
```

# Enumeraciones

Son un tipo de dato más complejo, definido por el programador que permite dar contexto al código 

```Dart
enum Nombre {
  valor1, valor2, valor3
  }
```

> Cuando trabajamos con enumeraciones, debemos de crearlas fuera de la clase main ya que
> se trata de un tipo de dato nuevo para Dart
> **Es importante usar mayúscula para saber que se trata de una enumeración**

```Dat
void main(){
  Tiempo tiempo = Tiempo.Soleado;
  // Las enumeraciones suelen usarse con switch 
  switch(tiempo) {
    case Tiempo.Soleado:
      print("El tiempo está soleado"); 
      break; 
    case Tiempo.Lluvioso: 
      print("El tiempo está lluvioso"); 
      break; 
    case Tiempo.Despejado: 
      print("El cielo está despejado"); 
      break 
    }
}

enum Tiempo { Soleado, Lluvioso, Despejado }
```

# Introducción a colecciones

Es una estrcutura, que **representa un grupo de valores mediante una única variable**. 
Por lo general solo contiene un único tipo de dato y cada valor puede ser localizado por un índice. 


## Beneficions de usar una colección

- Esfuerzo: Reduce los esfuerzos de programación 
- Manipulación: Permite manipular las estructuras
- Reutilización: Fomenta la reutilización de software 
- Tipos de colecciónes: List, Set, Map

# Colección de tipo Lista

Es un tipo de dato que consiste en una secuencia ordenada de valores de un tipo en específico y de tamaño variable
- Creación 
```Dart
List <int> = [1, 2, 3]; 
List <String> = [];
```

## Propiedades de List

- **first**: Devuelve el primer elemento de la lista
- **isEmpty**: Devuelve _true_ si la colección no tiene elementos
- **isNotEmpty**: Devuelve _true_ si la colección tiene al menos un elemento 
- **length**: Devuelve el tamaño de la lista
- **last**: Devuelve el último elemento de la lista
- **reversed**: Devuelve un objeto iterable que contiene los valores de la lista en orden inverso

## Funciones de List

- **add**: Agrega un nuevo elemento a la lista
- **insert**: Agrega un elemento en una posición específica
- **removeAt**: Elimina un elemento de una posición específica
- **clear**: Limpia la lista

> En la lista se puede repetir elementos sin ningun problema

```Dart
void main() {
  // Lista de amigos
  List<String> amigos = [];
  
  print(amigos.isEmpty);
  
  amigos = ["Amanda", "Beto", "Carmen"];
  
  print(amigos.isEmpty);
  
  print(amigos.length);
  
  amigos.add("Amanda");
  
  amigos.remove("Beto");
  
  amigos.insert(1, "Damián");
  
  print(amigos);
  
  amigos.clear();
  
  for (int i = 0; i < amigos.length; i++) {
    print("amigos[$i]: ${amigos[i]}");
  }
  
  if (amigos.isEmpty) {
    print("No hay amigos en la lista");
  }
}

```

# Colección de tipo Sets

Es parecido a una lista, con la diferencia de que **NO** puede tener valores duplicados

- Creación: 
```Dart
  List <int> = {1, 2, 3};
  List <String> = {};
```
## Propiedades de Set

- **first**: Devuelve el primer elemento de la lista
- **isEmpty**: Devuelve _true_ si la colección no tiene elementos
- **isNotEmpty**: Devuelve _true_ si la colección tiene al menos un elemento 
- **length**: Devuelve el tamaño de la lista
- **last**: Devuelve el último elemento de la lista
- **reversed**: Devuelve un objeto iterable que contiene los valores de la lista en orden inverso

## Funciones de Set

- **.add**: Agrega un nuevo elemento al conjunto, al final
- **.remove**: Elimina un elemento del conjunto
- **.clear**: Limpia el conjunto 

```Dart
void main() {
  // Set de paises
  Set<String> paises = {};
  
  paises = {"Argentina", "Brasil", "Colombia"};
  
  print(paises);
  
  paises.add("Argentina");
  
  print(paises);
  
  for(int i = 0; i < paises.length; i++) {
    print(paises.elementAt(i)); // Es el equivalente a hacer en una lista MyList[i]
  } 
}
```

# Colección de tipo Map 

Es una colección de pares de llave - valor, también se les conoce como diccionarios, donde
la llave no se puede repetir

- Inicialización
```Dart
var persona = {
  nombre: "Ana",
  edad: 12,
  }
```
## Propiedades de Map 

- **keys**: Devuelve una lusta con las llaves
- **values**: Devuelve una lista con los valores
- **isEmpty**: Devuelve _true_ si la colección no tiene elementos
- **isNotEmpty**: Devuelve _true_ si la colección tiene al menos un elemento 
- **length**: Devuelve el tamaño de la lista

## Funciones de Map 

- **addAll**: Agrega elementos a la colección
- **remove**: Elimina un elemento del conjunto 
- **clear**: Limpia el conjunto 

**POR DEFECTO LOS MAPS TIENEN LLAVES Y VALORES _DINAMICOS_** pero podemos reasignarlas

```Dart
void main() {
  //Map<TipoDeDatoParaLlaves, TipoDeDatoParaValores>
  Map<String, dynamic> persona = {
    "nombre": "Ana",
    "edad": 12,
    "pais": "Colombia",
    "altura": 1.54
  };
  
  print(persona.keys);
  print(persona.values);
  
  print(persona["nombre"]);
  
  if(persona["pais"] == null) {
    print("La persona no tiene pais");
  }
  else {
    print(persona["pais"]);
  }
}
```

## Valores nulos
- **Cuándo aparecen**: Cuando el conjunto no tiene una llave asociada, retorna _null_ 
- **Cómo lidiar con ellos**: _null_ es un tipo de valor que representa nada, por lo que puede ser comparado mediante un _if_

# Colección de colecciones

## Colecciones anidadas

- Cuando sucede: Es cuando una colección contiene una colección dentro de sus valores, _común en Maps_
- Ejemplo: 

```Dart
Map restaurantes = {
  "nombre": "Pollos del monte", 
  "estrellas": [5, 4, 3, 4]
}
```

```Dart
void main() {
  Map restaurante = {
   "nombre": "Pollos del monte",
   "estrellas": [5, 4, 3, 4, 2]
  };
  
  print(restaurante);
  
  if(restaurante['estrellas'] == null) {
    print("El restaurante no tiene estrellas");
  } else {
    List<int> estrellas = restaurante["estrellas"];
    int suma = 0;
    for(int i = 0; i < estrellas.length; i++) {
      suma += estrellas[i];
    }
    double promedio = suma / estrellas.length;
    restaurante.addAll({"promedio": promedio});
  }
  print(restaurante);
}
```

## Unión de colecciones

- Caso: Cuando se requiere unir el contenido de 2 o más colecciones
- Soluciones: Usando la función **.addAll()**; Durante el constructor con **...**; Hacer una nueva colección 

**Usando .addAll()**
```Dart
void main() {
  List<String> coloresPrimarios = [
    "rojo",
    "amarillo",
    "azul",
  ];
  
  List<String> coloresSecundarios = [
    "morado",
    "verde",
    "naranja",
  ];
  
  // Añadir elementos a un diccionario
  coloresSecundarios.addAll(coloresPrimarios);
  
  print(coloresSecundarios);
  print(coloresPrimarios);
}
```

Podemos hacer lo anterior pero ahora usando tres puntos (...) de la siguiente manera.

**Usando ...**
```Dart
void main() {
  List<String> coloresPrimarios = [
    "rojo",
    "amarillo",
    "azul",
  ];
  
  List<String> coloresSecundarios = [
    "morado",
    "verde",
    "naranja",
    ...coloresPrimarios
  ];
   
  print(coloresSecundarios);
  print(coloresPrimarios);
}
```

Y podemos hacer lo mismo pero ahora construyendo una nueva lista.

**Creando una nueva lista**
```Dart
void main() {
  List<String> coloresPrimarios = [
    "rojo",
    "amarillo",
    "azul",
  ];
  
  List<String> coloresSecundarios = [
    "morado",
    "verde",
    "naranja",
  ];

  List<String> colores = [
    ...coloresPrimarios,
    ...coloresSecundarios
  ];
  
  print(coloresSecundarios);
  print(coloresPrimarios);
  print(colores);
}
```


# **if** entre colecciones

Dentor de la declaración de colecciones se puede tener un condicionador de tipo _if_

```Dart

// lo que encuentre a la derecha de la expresión (amarillo en este caso)
// se va ha agregar a la lista sí agregarAmarillo es true
// *agregarAmarillo debe de ser del tipo bool
var colores = [
  "verde",
  if (agregarAmarillo) "amarillo", 
  "azul"
 ]
```

# **for** entre colecciones

Dentro de la declaración de colecciones se puede tener un condicionador de tipo _for_

```Dart
var colores1 = [
  "verde", 
  for(var color in colores2) color, 
  "azul"
  ]; 
```

```Dart
void main() {
  List<String> coloresPrimarios = [
    "rojo",
    "amarillo",
    "azul",
  ];
  
  List<String> colores = [
    "morado",
    "verde",
    for (int i = 0; i < coloresPrimarios.length; i++) coloresPrimarios[i]
  ];
  
  print(coloresPrimarios);
  print(colores);
}
```
