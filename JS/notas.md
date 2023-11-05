# Acerca de JavaScript 

## ¿Cómo nace JS?

> Nace con la necesidad de generar dinamismo en las páginas 
web.

## ¿Qué es? 

> Es un lenguaje interpretado, orientado a objetos, 
debilmente tipado y dinámico 

**Débilmente tipado:** Se peuden hacer operaciones entre 
tipos distintiso de datos

**Dinámico:** Corre directamente en la etapa de Runetime sin 
una etapa de compilación previa.
Por lo que los errores que tengamos en código los veremos 
hasta que se ejecuta el programa

**¿Interpretado?** Sí, la razón es que el navegador lee 
linea por linea nuestro código 
el cual le indica lo que tiene que hacer sin la necesidad de 
compilar. Todo esto, controlado 
por el motor de Javascript V8 del navegador

# Javascript es Backwards Compatible

> Todas las funciones nuevas que salen de Javascript no 
dañarán el trabajo ya hecho, pero 

no se podrán utilizar en nuestro entorno de trabajo 
inmediatamente. Para solucionar esto, 
tenemos a **Babel** que permite utilizar las nuevas 
caraterísticas del lenguaje pero lo transforma
a una versión que el navegador pueda entender. 

# ¿Por qué JavaScript?

 - Tiene una comunidad enorme
 - Si sólo estas interesado en Aplicaciones Web, tienes 
 muchos frameworks y librerias 
que te ayudan. 
 - Si no quieres solo web, puedes usar React Native para 
 poder construir aplicaciones nativas 
 - Electron por otro lado, te ayuda a construir aplicaciones 
 de escritorio 
 - También puedes trabajar en la parte de Back-end o IOT con 
 NodeJS, que es un entorno de 
JavaScript que corre directamente en el Back-end

# Tipos de datos en JavaScript
## Tipos Primitivos

- String: Cadenas de texto
- Number: Valores numéricos
- Boolean: Verdadero o falso 
- Null: Tipo especial, contienen null
- Undefined: Tipo especial, contiene undefined

## Tipos objeto 

### Tipos predefinidos de JavaScript 

- Date (fechas)
- RegExp (expresiones regulares) 
- Error (datos de error) 

### Tipos definidos por el programador/usuario 

- Funciones simples
- Clases

### Arrays

- Serie de elementos o formación tipo vector o matriz. Lo 
consideramos un objeto especial

### Objetos especiales 

- Objeto global 
- Objeto prototipo 
- Otros

# Comandos o palabras reservadas

**typeof:** Me indica el tipo de dato 
Ejemplo: 
> typeof "Vidale" 
>> "string"

> typeof null 
>> "object"

> typeof undefined
>> "undefined"

**String():** Sirve para castear otros tipos
de datos a string
Ejemplo: 
> var a = 20; 
>> typeof a
>>> number

> var c = String(a)
>> typeof c
>>> String

**Number():** Sirve para castear otros tipos de datos
a Number
Ejemplo:
> var a = "20"; 
>> typeof a
>>> String

> var c = Number(a); 
>> typeof c
>>> Number

# Variables JS

Dentro de JavaScript tenemos tres formas de declarar 
una variable: **var**, **const** y **let**

## **Var:** 
Era la forma en que se declaraban las variables hasta 
ECMAScript 5. Casi ya no se usa porque es de forma global y 
tiene las siguientes características:

- Se puede reinicializar: 
> Var pokemonType = ‘electric’
entonces reinicializar es:
> Var pokemonType = ‘grass’ 
el último dato predomina.

- Se puede reasignar: 
> Var pokemonType = ‘electric’
ahora la reasignamos 
> pokemonType = ‘grass’ 
ya no lleva var.

- Su alcance es función global: osea inicializamos la 
variable, pero la podemos llamar desde cualquier bloque. 
Pero hay que tener mucho cuidado con ello ya que puede haber 
peligro, **no es recomendable usar Var**.

> **const y let es la forma en que se declaran las variables 
a partir de ECMAScript 6**


## **const:** 
Sirve para declarar variables que nunca van a ser 
modificadas.

- No se puede reinicilizar: es una const única no puede 
haber otra inicializada con el mismo nombre.
- No se pude re asignar: una vez que la hayamos inicializado 
no la podemos reasignar solo con su nombre.
- No es inmutable: osea no puede cambiar con objetos

## **Let:**
Son variables que pueden ser modificadas, se pueden cambiar

- No se puede reinicilizar: es una const única no puede 
haber otra inicializada con el mismo nombre
- Se puede reasignar: Osea la variable ya inicializada le 
reasignamos otro valor
- Su contexto de es bloque: Solo funciona dentro de un 
bloque {}, fuera de ello no.




# Funciones JS
Las funciones son las tareas que va a llevar 
a cabo el navegador. Existen 2 tipos de funciones
- Declarativas 
- De expresión 

Ambas pueden llevar paámetros, que son los datos que 
necesitan para ejecutarse. 
Cada parámetro va separado por coma, cada instrucción 
que tenga la función debe terminar con **;**

## Sintaxis de función declarativa

> function MyFunction(Parámetros de la función){
    Instrucciones
}

Ejemplo
> function suma(a,b){
    return a+b;
}

Las funciones de expresión son aquellas que guardamos
 en una variable, por lo tanto, no es necesario nombrarlas.

 ## Sintaxis de la función de expresión 

 > _var Nombre de la variable = function (parametros)
 {Instrucciones}

Ejemplo 
> var suma = function (a, b){ return a+b; }


# Diferencia entre declarativa y de expresión 

A las funciones declarativas se les aplica hoisting, y a la 
expresión de función, no. Ya que el hoisting solo se aplica 
en las palabras reservadas var y function.

Lo que quiere decir que con las funciones declarativas, 
podemos mandar llamar la función antes de que ésta sea 
declarada, y con la expresión de función, no, tendríamos que 
declararla primero, y después mandarla llamar.

> **Hoisting:** Significa que podemos llamar a una función y 
definirla más abajo. Esto sólo pasa en ecmascript 5 hacia
abajo. 


# Scope

> __Es el alcance que tienen las variables__

## Scope Global
> Cuando inicializas una variable y esta es accesible 
por todos. 

## Scope Local
> Cuando inicializas una variable dentro de una función y 
esta es sólo accesible en esa función. 
Si tienes una variable en scope global, puedes acceder 
a ella en dentro de la función. 

**Scope Global:** puede ser accedido desde una función.

**Scope Local:** no puede ser accedido desde furera de la
función.


# Coerción 
Es la forma en la que podemos cambiar un tipo
de valor a otro, existen dos tipos de 
coerción: 
- Coerción implícita: Es cuando el lenguaje
nos ayuda a cambiar el tipo de valor
- Coerción explicita: Es cuando obligamos
a que cambie el tipo de valor. 

# Valores: Truthy y Falsy

**Falsy**

- Boolean(): false
- Boolean(0): false
- Boolean(null): false
- Boolean(NaN): false // NaN es Not and Number
- Boolean(Undefined): false
- Boolean(false): false
- Boolean(""): false

**Truthy**

- Boolean(1): true
cualquier numero que no sea igual a cero o menor a cero es 
true
- Boolean(“a”): true
- Boolean(" "): true
siendo un espacio el valor es true
- Boolean([]): true
un array nos da un true
- Boolean({}): true 
un objeto nos da el valor de true
- Boolean(function() {}): true 
una funcion tambien es true
- Boolean(true): true


# Operadores

## Operador de asignacion

**=** 	operador de asignacion

## Operadores de comparacion

**==** igual que
**===** estrictamente igual que
**>** or **>=** or **>==** mayor o mayor igual que
**<** or **<=** or **<==** menor o menor igual que
**!=** or **!==** diferente que

## Operadores aritmeticos

**+** 	operador suma este se utiliza para concatener dos 
cadenas de texto.
**-** 	operador resta
__*__ 	operador de multicacion
**/** 	operador de division
**%** 	operador de modulo
__**__ 	operador de potenciacion

## Operadores logicos
tambien se les conoce como operadores binarios. por que 
toman dos valores y generan un resultado.


**!** 	NOT niega un valor
**&&** 	AND
**||** 	OR

> En el caso de **igual que** y **estrictamente igual que** 
pasa algo como: 

> 3 == "3"
>> True

Pero si hacemos: 
> 3 === "3"
>> false

A esto se refiere con igual que y estrictamente igual que. 

# Funciones de array
> var frutas = ["Fresa", "Zarza"];

> frutas.push("Uvas")

**.push("elemento")**
Añade elementos AL FINAL del arreglo

**.pop()** 
Elimina un elemento AL FINAL del Arreglo

**.unshift("Elemento")**
Agrega un elemento al arreglo pero AL INICIO

**.shift()**
Elimina el primer elemento del arreglo

**.indexOf("Elemento")**
Me regresa la posición del elemento en el arreglo

## Métodos de recorridos de Arrays

**.filter()**: Nos permite filtrar solo los elementos que 
deseamos (según ciertos criterios) y devolverlos en un nuevo 
array.
**.map():** Crea un nuevo array con los resultados de la 
llamada a la función indicada aplicados a cada uno de sus 
elementos.

**.find():** Retorna el primer elemento de un array que cumple con una condición definida en un nuevo array.

**.forEach():** Me regresa el mismo arreglo sin 
modificarlo pero filtrado. Ejecuta la función 
una vez por cada elemento del array

**.some():** Nos regresa verdadero o falso pero 
no nos regresa como tal los articulos
que cumplan la validación

# Loops: For y For...of

Los bucles pueden ejecutar un bloque de código varias veces. JavaScript admite diferentes tipos de bucles:

- for - recorre un bloque de código varias veces

- for/in - recorre las propiedades de un objeto

- for/of - recorre los valores de un objeto iterable

- while - recorre un bloque de código mientras se cumple una condición específica

- do/while - también recorre un bloque de código mientras se cumple una condición específica

# Objects

Objetos: JS es un lenguaje que está diseñado en un 
paradigma de objetos
Ejemplo de objeto: 

> var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020
}

Para acceder a una propiedad del objeto: 
> miAuto.modelo
>> "Corolla"

Se pueden agregar propiedades que van a ser una función, se les llama **métodos de objetos**.

> var miAuto = {
marca: "Toyota",
modelo: "Corolla",
año: 2020, 
>
> detallesDelAuto: function () {
	console.log(`Auto ${this.modelo} ${this.año}`);
}

> miAuto.detallesDelAuto();
>> Auto Corolla 2020

**¿Quién es _this_?**
Es una variable que hace referencia al objeto. En este caso: this = miAuto.