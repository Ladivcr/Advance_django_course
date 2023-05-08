# Curso básico de programación en Go

- Go online: https://go.dev/play/
- Documentación que incluye paquetes externos: https://pkg.go.dev/?utm_source=godoc
- Documentación de paquetes estandar (Oficial): https://pkg.go.dev/std
- Docuemntación offline: https://zealdocs.org/
- Paquetes de terceros: https://awesome-go.com/

# ¿Qué es, por qué y quienes utilizan Go? 

### ¿Qué es? 
- Lenguaje compilado (se recopilan los códigos) y estáticamente tipado (se debe indicar el tipo de variable o constante para que guarde algún valor en él)
- Maneja procesos pesados
- Es potente pero amigable en sintaxis

### ¿Por qué Go/Golang?
- Veloz en la compilación
- Alto rendimiento con tareas pesadas
- Soporte nativo para concurrencia
- Obliga a implementar buenas prácticas

> Creado en Google por Robert Griesemer, Rob Pike y Ken Thompson. Primera versión en 2012

# Primeras líneas

-> *Como punto de entrada, es una buena práctica, el crear el archivo: _main.go_*

### Hola mundo en Go
```Go
package main
import "fmt"

func main() {
  fmt.Println("Hola mundo, Go")
}
```

- El paquete **main**, define un programa ejecutable en lugar de uno modular. 
- El paquete **fmt** tiene tanto input como funciones de salida. 
> La biblioteca estándar de Go tiene más de 100 paquetes para tareas comunes de estilo input (datos input) y de salida (salida de datos), clasificación y manipulación de textos. 
- La función main, es la función principal que va a ejecutar el código al momento de ser invocado. 
- fmt.Println("message") es la salida por consola. 

### Go te obliga a implementar buenas prácticas
```Go
package main
import "fmt"

func main() 
{ // Corchete modificado respecto al código anterior
  fmt.Println("Hola mundo, Go")
}
```
Si dejamos el corchete de esa forma. Al momento de compilar, el mismo programa nos va a
arrojar un warning. Esto porque nos obliga a implementar buenas prácticas. 

## ¿Cómo compilar Go? 

1. Ejecutar: `go build my/route/main.go`
2. Esto genera un archivo llamado **main**
3. Ejecutar el archivo main: `./main`
4. Otra opción también puede ser: ``go run main.go `
> go run lo que hace es compilarlo en una carpeta temporal, te muestra lo que tiene 
que hacer y lo elimina. 


# Variables, constantes y zero values
- **Para constantes la sintaxis es:** TipoDeVariable Nombre TipoDeDato = Valor
> const pi float64 = 3.14
- **Para variables enteras es:** NameVariable := IntValue, NameVariable = IntValue  
> base := 12, base = 12
> La diferente entre una y otra es que, si tiene los dos puntos. Nos indica que la variable no
> ha sido creada antes. Si no tiene los dos puntos, signfica que fue creada antes y le estoy 
> asignando un valor. 
- **También puede ser:** var NameVariable int = 14, var area int
> Es decir, indicando el tipo de dato. Lo cual para la lectura de código, es mejor. 


```Go
package main
import "fmt"

func main() { 
  // Declaración de constantes
  const pi float64 = 3.14
  const pi2 = 3.1415
  
  fmt.Println("pi: ", pi, "\npi2:", pi2)
  >>pi:  3.14 
  >>pi2: 3.1415
  
  // Declaración de variables enteras
  base := 12
  var altura int = 14
  var area int
  
  fmt.Println(base, altura, area)
  >>12 14 0
  
  // Zero values
  var a int
  var b float64 
  var c string 
  var d bool
  
  fmt.Println(a, b, c, d)
  >>0 0  false
  // Area cuadrado 
  const baseCuadrado = 10 
  areaCuadrado := baseCuadrado * baseCuadrado 
  fmt.Println("Area cuadrado", areaCuadrado)
}
```

### Zero values 
Cuando creas variables y no le asignas un valor. Por defecto tiene el valor de zero. Que
se conoce como _zero value_.

Algunos valores por defecto para los tipo de datos más comúnes son: 
- var a int: 0
- var b float64: 0
- var c string: ""
- var d bool: false

# Operadores aritméticos

```Go
package main

import "math"
import "fmt"

func main() {
	// area del rectangulo
	base := 4
	altura := 2
	fmt.Println("Area del rectangulo ", base * altura )

	// area del trapecio
	base = 3 // Observese que ya no hay dos puntos, porque es reasignación
	baseAbajo := 2
	areaTrapecio := altura * (base + baseAbajo) / 2
	fmt.Println("Area del trapecio ", areaTrapecio)

	// area del circulo
	radio := 2
	areaCirculo := math.Pi * math.Pow(float64(radio), 2) // Funciones de la libreria math
	fmt.Println(areaCirculo)
  
  // Incremental y Decremental 
  // Es buena práctica hacer ++ y/o -- 
  X := 0
  X++
  >>1
  X--
  >>0
}
```

# Tipos de datos primitivos

En Go/Golang puedes o no declarar el tipo de dato, pero si lo haces puedes ganar un buen 
performance a nivel de tu código. 

```Go
//Numeros enteros
// Si no especificas, lo toma dependiendo de la arquitectura de tu sistema operativo
//si tienes 32 bits, lo toma como 23 y si tienes 64 bits, toma 64 bits. 

//int = Depende del OS (32 o 64 bits)
//int8 = 8bits = -128 a 127
//int16 = 16bits = -2^15 a 2^15-1
//int32 = 32bits = -2^31 a 2^31-1
//int64 = 64bits = -2^63 a 2^63-1

//Optimizar memoria cuando sabemos que el dato simpre va ser positivo
//uint = Depende del OS (32 o 64 bits)
//uint8 = 8bits = 0 a 127
//uint16 = 16bits = 0 a 2^15-1
//uint32 = 32bits = 0 a 2^31-1
//uint64 = 64bits = 0 a 2^63-1

//numeros decimales
// float32 = 32 bits = +/- 1.18e^-38 +/- -3.4e^38
// float64 = 64 bits = +/- 2.23e^-308 +/- -1.8e^308

//textos y booleanos
//string = ""
//bool = true or false

//numeros complejos
//Complex64 = Real e Imaginario float32
//Complex128 = Real e Imaginario float64
//Ejemplo : c:=10 + 8i

```

# Paquete fmt: algo más que imprimir en consola 


```Go
package main

import "fmt"

func main() {
	// Declaración de variables
	helloMessage := "Hello"
	worldMessage := "World"

	// Println 
	fmt.Println(helloMessage, WorldMessage)
	>>Hello World
	
	//Printf
	nombre := "Platzi" // %s string 
	cursos := 500 // %d enteros
	fmt.Printf("%s tiene más de %d cursos\n", nombre, cursos)
	fmt.Printf("%v tiene más de %v cursos\n", nombre, cursos)
	>>Platzi tiene más de 500 cursos
	
	//Sprintf
	message := fmt.Sprintf("%s tiene más de %d cursos\n", nombre, cursos)
	fmt.Println(message)
	>>Platzi tiene más de 500 cursos
	
	//Tipo datos
	fmt.Printf("helloMessage: %T\n", helloMessage)
	fmt.Printf("cursos: %T\n", cursos)
	>>helloMessage: string
	>>cursos: int
	
}
```
> Cuando no sabemos cuál es el tipo de dato que irá en el `Printf`, podemos hacer uso de `%v`

### Diferencias entre prints
- Printf: "Print Formatter" permite formatear números, variables y strings en el primer parámetro de 
cadena que se le de.
- Print: "Print" No formatea nada, solo toma el string y lo muestra en consola.
- Println: "Print Line" Es lo mismo que `Print()`. Sin embargo, añade `\n` al final.
- Sprintf: "Save print" Genera un string pero no lo imprime en consola, solo lo guarda como un string. 

> Para saber el tipo de dato de una variable podemos usar el comodin `%T` de la siguiente forma: ``fmt.Printf("helloMessage: %T\n", helloMessage)``


# Uso de funciones

```Go
package main

import (
	"fmt"
	"math"
)

func areaCirculo(radio float64) float64 {
	return math.Pi * radio * radio
}
func areaRectangulo(base float64, altura float64) float64 {
	return base * altura
}

func areaTrapezoide(B float64, b float64, h float64) float64 {
	return h * (B + b) / 2
}

func doubleReturn(a int) (c, d int) {
	return a, a * 2
}

func main() {
	fmt.Printf("Circulo %.2f \n", areaCirculo(2))
	fmt.Printf("Rectangulo %.2f \n", areaRectangulo(5, 10))
	fmt.Printf("Trapezoide %.2f \n", areaTrapezoide(10, 5, 3))
	// Cuando no ocupas un valor, basta con usar guíon bajo para que Go no lo tome en cuenta
	num1, _ := doubleReturn(10)
	fmt.Printf("DoubleReturn %d \n", num1)
	num2, num2q := doubleReturn(10)
	fmt.Printf("DoubleReturn %d -> %d \n", num2, num2q)

}
```
> Créditos para: Brayan Alexis Lechon Andrago

# El poder de los ciclos en Golang: for, for while y for forever

```Go
package main

import "fmt"

func main() {
	// For condicional
	for i := 0; i <= 10; i++ {
		fmt.Println(i)
	}
	fmt.Printf("\n")
	// For While
	counter := 0
	for counter < 10 {
		fmt.Println(counter)
		counter++
	}
	fmt.Printf("\n")

	// For forever
	counterForever := 0
	for {
		fmt.Println(counterForever)
		counterForever++
		if counterForever == 10 {
			break
		}
	}

	// For range
	arreglo := [8]int{0, 2, 4, 6, 8, 10, 12, 14}
	fmt.Println("\nPrimer ejemplo")
	for idx, j := range arreglo {
		fmt.Printf("indice idx: %d tiene como valor #%d\n", idx, j)
	}
	fmt.Println("Segundo ejemplo")
	for idx := range arreglo {
		fmt.Printf("Valor de idx: %d\n", idx)
	}
	fmt.Println("Tercer ejemplo")
	for _, j := range arreglo {
		fmt.Printf("Valor de i: %d\n", j)
	}

}
```

# Operadores lógicos y de comparación 

### Operadores de comparación

> Retornan True o False en caso de cumplirse o no una expresión. 

- valor1 == valor2: Retorna TRUE si valor1 y valor2 son exactamente iguales.
- valor1 != valor2: Retorna TRUE si valor1 es diferente de valor2.
- valor1 < valor2: Retorna TRUE si valor1 es menor que valor2
- valor1 > valor2: Retorna TRUE si valor1 es mayor que valor2
- valor1 >= valor2: Retorna TRUE si valor1 es igual o mayor que valor2
- valor1 <= valor2: Retorna TRUE si valor1 es menor o igual que valor2.

### Operadores lógicos 

> Son aquellos que retorna TRUE o FALSE si cumplen o no una condición utilizando puertas lógicas.

**AND**: Este operador indica que todas las condiciones declaradas deben cumplirse para poderse marcar como TRUE. En Go, **se utiliza este símbolo &&**.

**OR**: Este operador indica que al menos una de las condiciones debe cumplirse para marcarse como TRUE. En Go, **se representa con el símbolo ||**.

**NOT**: Este operador retornará el opuesto al boleano que está dentro de la variable.

# El condicional if


```Go
package main
import "fmt"

func main() {
valor1 := 1
valro" := 2

// if - else
if valor1 == 1 {
fmt.Println("Es 1")
} else {
	fmt.Println("No es uno")
}
// With and
if valor1 == 1 && valor2 == 3 {
	fmt.Println("Es verdad")
}
// With or
if valor1 == 0 || valor2 == 2 {
	fmt.Println("Es verdad. OR")
}

// Convertir texto a número 
// Documentación de la función: https://pkg.go.dev/strconv
value, err := strconv.Atoi("53") // Value guarda el valor y err el error en caso de existir
if err != nil { // Si existe error, no será nil. Pero si no existe, es nil.
	lof.Fatal(err) // Imprime en consola que paso y termina el código 
}
fmt.Println("value:", value)

}
```

# Múltiples condiciones anidadas con Switch 

> Se recomienda usar cuando estas utilizando múltiples condiciones anidadas con if. En 
su lugar, es mejor usar switch. 

```Go
package main 

import "fmt"
func main() {
	modulo := 5 % 2
	swtich modulo {
	case 0: 
		fmt.Println("Es par")
	default: 
		fmt.Println("Es impart")
	}
	
	// Alternativa de escritura
	swtich modulo := 5 % 2; modulo {
	case 0: 
		fmt.Println("Es par")
	default: 
		fmt.Println("Es impart")
	}
	
	// Switch abierto, sin condición 
	value := 200
	/*Lo ideal es usar con condicion cuando vas a iterar sobre una variable y 
	usar uno abierto cuando vas a iterar en múltiples condiciones, tal como si fuese un if*/
	switch {
	case value > 100: 
		fmt.Println("Es mayor")
	case value < 0: 
		fmt.Println("Es menor a 0")
	default: 
		fmt.Println("No condición")
	}

}
```

# El uso de los keywords defer, break y continue 

```Go
package main

import "fmt"

func main(){
	// defer
	fmt.Println("Hola")
	fmt.Println("Mundo")
	/ /Si ejecutamos el código en este punto, el resultado es: 
	>> Hola
	>> Mundo
	// Si añadimos defer
	defer fmt.Println("Hola")
	fmt.Println("Mundo")
	// Va a imprimir todas las lineas después de defer
	// y antes de morir el código, imprimira la línea de defer
	>> Mundo 
	>> Hola
	
	// continuea y break
	// En ambos casos se usan dentro de un ciclo for
	for i:=0; i<10; i++ {
		fmt.Println(i)
		
		// continue
		if i == 2 {
			fmt.Println("Es 2")
			continue
		}
		// break 
		if i == 8 {
			fmt.Println("Break")
			break
		}
	}
}
```
- Podemos usar **defer** para casos como la apertura de una conexión a la base de datos. Le 
indicamos un **defer** a la conexión de tal forma que cuando termino de ejecutar todo, cierra la 
conexión como última ejecución.

- Podemos usar **continue** cuando una condición dada dentro del ciclo for puede ser algo que 
nos interese que continue, puede ser un error controlado. Es decir, tomamos el error pero el ciclo sigue.

- **break** en lugar de **continue** lo que hace es cortar el flujo del ciclo for. 

# Arrays y Slices

- **Los arrays son inmutables**
- No podemos añadir elementos pero podemos cambiar el valor de los que ya hay
- **len(array)**: Longitud del arreglo & **cap(array)**: Capacidad del arreglo
- **Los slices** se declaran similar a los arrays pero la diferencia es que **no se le indica la longitud**
```Go 
package main 
import "fmt"

func main(){
	// array 
	var array [4]int
	fmt.Println(array)
	>> [0 0 0 0] //Son los zero values de este tipo de dato
	var array [4]int
	array[0] = 1
	array[1] = 2
	fmt.Println(array)
	>> [1 2 0 0]
	fmt.Println(array, len(array), cap(array))
	>> [1 2 0 0] 4 4
	// len(array) Longitud del arreglo
	// cap(array) Capacidad máxima del array
	
	// Slice
	slice := []int{0, 1, 2, 3, 4, 5, 6}
	fmt.Println(slice, len(slice), cap(slice))
	>> [0 1 2 3 4 5 6 7] 7 7
	
	// Métodos en el slice
	fmt.Println(slice[0])
	fmt.Println(slice[:3])
	fmt.Println(slice[2:4])
	fmt.Println(slice[4:])
	>> 0 
	>> [0 1 2]
	>> [2 3]
	>> [4 5 6]
	
	// Append
	slice = append(slice, 7)
	fmt.Println(slice)
	>> [0 1 2 3 4 5 6 7]
	
	// Append nueva list
	newSlice := []int{8, 9, 10}
	slice = append(slice, newSlice...)
	fmt.Println(slice)
	>> [0 1 2 3 4 5 6 7 8 9 10]
	/* Los tres puntos nos indican que Go, "descomprime"
	 el slice y añade elemento por elemento al otro  slice*/
	
}

```

# Recorrido de Slices con Range

```Go 
package main 

import "fmt"
func isPalindromo(text string) {
	text = strings.ToLower(text)
	var textReverse string
	for i := len(text) - 1; i>=0; i-- {
		textReverse += string(text[i])
	}
	
	if text == textReverse {
		fmt.Println("Es palindromo")
	} else {
		fmt.Println("No es un palindromo")
	}
}
func main() {
	slice := []string{"hola", "que", "hace"}
	
	//indice, valor
	// si no nos importa el indice, usamos "piso"
	for _, valor := range slice {
		fmt.Println(valor)
	}
	>> hola
	>> que 
	>> hace
	// si solo queremos el indice 
	for i := range slice {
		fmt.Println(i)
	}
	>> 0 
	>> 1
	>> 2
	isPalindromo("ana")
	>> Es palindromo
	isPalindromo("amor a roma")
	>> Es palindromo
	isPalindromo("casa")
	>> No es palindromo
	
}

```

# Llave valor con Maps

```Go 
package main

func main(){
	// para crear un diccionario usamos make
	// la forma es: make(map[tipoDatoKey]tipoDatoValue)
	m := make(map[string]int)
	
	m["jose"] = 14
	m["Pepito"] = 20
	
	fmt.Println(m)
	>> map[Jose: 14 Pepito: 20]
	
	for key, value := range m {
		fmt.Println(key, value)
		// El recorrido es concurrente por lo que puede que no vayan 
		// en orden los datos a como fueron introducidos
		// Si queremos orden, utilizar slice
		>> jose 14
		>> Pepito 20 
	}
	// Encontrar un valor
	value := m["jose"]
	fmt.Println(value)
	>> 14
	// Valor que no existe
	value := m["joseph"]
	fmt.Println(value)
	>> 0 // Si accedes a una llave que no fue guardada, te pone el ZeroValue del tipo de dato
	// el ZeroValue de int es cero. 
	
	// Verificar si una llave existe o no en el diccionario 
	value, ok := m["jose"]
	fmt.Println(value, ok)
	>> 14 true
	
	value, ok := m["joseph"]
	fmt.Println(value, ok)
	>> 0 false	
}
```

# Structs: La forma de hacer clases en Go 

```Go
pacakge main 

import "fmt"

type car struct {
	brand string 
	year int 
}

func main(){
	myCar := car(brand: "Ford", year: 2020)
	fmt.Println(myCar)
	>> {Ford 2020}
	
	// Otra manera 
	var otherCar car 
	otherCard.brand = "Ferrari"
	fmt.Println(otherCar)
	>> {Ferrari 0} // ZeroValue porque no pasamos un año 
}

```

# Modificadores de acceso en funciones y Structs

- Una estructura puede modificar su acceso a partir de la primer letra. 
> Si la primer letra es mayúsculas. Significa que es público y si es minúscula, significa 
> que es privado. Aplica también para las variables que se usan en el struct. 

```Go
// src/mypackage/mypackage.go
pacakage mypackage
// es el mismo nombre del archivo

// CarPublic Car con acceso público 
type Carpublic struct {
	Brand string
	year int
}

package main

import "fmt"
// Para colocar un alias a la importanción es
// poniendo de lado izquierdo el alias
import "go/src/mypackage" // Se escribe todo el path hasta la carpeta
pk import "go/src/mypackage" // Importación con alias
func main() {
	var myCar = mypackage.CarPublic 
	var myCar = pk.CarPublic // haciendo uso del alias
	myCar.Brand = "Ferrari"
	fmt.Println(myCar)
	>> {Ferrari 0}
	
}

```

# Structs y Punteros

- Recursos de punteros: https://www.digitalocean.com/community/conceptual-articles/understanding-pointers-in-go-es

Los punteros no es más que el acceso a la memoria. 
Cuando guardamos una variable, el runtime crea una dirección de memoria y a esa
dirección de memoria le guarda el valor de dicha variable. 

```Go
package main 

import "fmt"

type pc struct {
	ram int
	disk int
	brand string 
}

// Para poder acceder a la marca de la estructura pc
// añadimos los parentesis antes del nombre de la función
// De esta forma pasamos los parámetros y convertimos esta función 
// en una función de nuestro objeto pc

func (myPC pc) ping(){
	fmt.Println(myPC.brand, "Pong")
}

func (myPC *pc) duplicateRAM(){
	// Con el asterisco indicamos que vamos acceder
	// a sus valores mediante el puntero
	myPC.ran = myPC.ram * 2
}

func main(){
	a := 50
	b := &a //Puntero de a. Es la dirección de memoria donde esta guardado a
	
	fmt.Println(a)
	fmt.Println(b)
	>> 50
	>> 0xc000138010
	// & Accede a la dirección de memoria
	// * Accede al valor de la dirección de memoria
	fmt.Println(b)
	fmt.Println(*b)
	>> 0xc000138010
	>> 50
	
	// Si modificas el valor que esta apuntado a la dirección de memoria
	// las demás variables que apuntan a esa dirección de memoria, también cambian de valor.
	*b = 100 
	fmt.Println(a)
	>> 100 
	
	myPC := pc{ram: 16, disk: 200, brand: "msi"}
	fmt.Println(myPC)
	>> {16 200 msi}
	
	myPC.ping()
	>> msi pong
	
	fmt.Println(myPC) 
	>> {16 200 msi}
	myPC.duplicateRAM()
	
	fmt.Println(myPC) 
	>> {32 200 msi}
	myPC.duplicateRAM()
	
	fmt.Println(myPC)
	>> {64 200 msi}
	
}


```
### Observaciones

- El “&” accede a la dirección del espacio de memoria de la variable.

- “*” accede al valor que contiene ese espacio de memoria, dado el nombre de una variable o una dirección especifica.

- Si modificas el valor que esta apuntado a la dirección de memoria, las demás variables
que apuntan a esa dirección de memoria, también cambian de valor. 

# Stringers: Personalizar el output de Structs

```Go 
package main 

import "fmt"

type pc struct {
	ram int 
	brand string
	disk int
}

// Para el formateo de strings necesitamos que el nombre de la función 
// sea string pero con la primer letra mayúscula y debemos indicar
// el tipo de dato de retorno. Un string en este caso. 
func (myPC pc) String() string {
	return fmt.Sprintf("Tengo %d GB RAM, %d GB Disco y es una %s", myPC.ram, myPC.disk, myPC.brand)
}

func main(){
	myPC := pc(ram:  16, brand:"msi", disk: 100}
	fmt.Println(myPC)
	>> "Tengo 16 GB RAM, 100 GB Disco y es una msi"
	
}

```

# Interfaces y listas de interfaces

Una interfaz no es más que un método en el cual puedes compartir otros métodos diferentes. 
Por ejemplo, si tenemos un mismo método que aplica a varios structs. La forma de crear
un solo punto de entrada, para no repetir, es crear una interfaz. 

- **SE RECOMIENDA USAR LAS INTERFACES, CUANDO LOS STRUCTS COMPARTEN FUNCIONES. 
MISMO NOMBRE PERO DIFERENTES PARÁMETROS U OPERACIONES**

```Go
package main 

import "fmt"

// Interface
type figuras2D interface {
	area() float64 // porque en nuestros dos calculos de área, es lo que se retorna
}

type cuadrado struct {
	base float64
}

type rectangulo struct {
	base float64
	altura float64
}

func (c cuadrado) area() float64 {
	return c.base * c.base
}

func (r rectangulo) area() float64 {
	return r.base * r.altura
}

func calcular(f figuras2D) {
	fmt.Println("Area:", f.area())
}

func main(){
	myCuadrado := cuadrado{base: 2}
	myRectangulo := rectangulo{base: 2, altura: 4}
	
	calcular(myCuadrado)
	calcular(myRectangulo)
	>> Area: 4
	>> Area 8
	
	// Lista de interfaces
	// Para una lista de interfaces, es como usar slices. Pero con la 
	// particularidad de que usas dos veces la llave y la primer llave se queda en blanco
	// Y en la segunda llave se añaden los datos, DIFERENTES TIPOS DE DATOS
	myInterface := []interface{}{"Hola", 12, 4.90}
	fmt.Println(myInterface...)
	>> Hola 12 4.9 
}

```

> Observamos que en ambos structs, el método tiene el mismo nombre: "area". De tal forma
que en la interface solo añadimos ese nombre como método. Cuando hacemos uso de 
la función calcular. Es cómo si el struct de Figuras2D tomara nuestras variables y a ambas
aplicara: `Mivariable.area()`

# ¿Qué es la concurrencia? 

- [Concurrencia en Golang](https://blog.friendsofgo.tech/posts/concurrencia-en-golang/)

> "La concurrencia está alineando con múltiples cosas al mismo tiempo mientras que el paralelismo está haciendo múltiples cosas al mismo tiempo." - Rob Pike 

- Concurrencia te permite estar pendiente de varios procesos, comienzas uno, empiezas otro, ves si el anterior ya terminó, luego crear otro así

- El paralelismo, es usar varios hilos del procesador para hacer varios procesos a la vez, pero siempre estas esperando que la tarea termine.

# Primer contacto con las Goroutines

```Go
package main

import (
	"fmt"
	"sync"
	"time"
)

func say(text string, wg *sync.WaitGroup) { // Gorutine

	defer wg.Done() // Esta linea se va a ejecutar hasta el final de la funcion, y de esta forma libera el gorutine del WaitGroup
	fmt.Println(text)
}

func main() {

	var wg sync.WaitGroup // El paquete sync permite interacturar de forma primitiva con las gorutine. Variable que acumula un conjunto de gorutines y los va liberando poco a poco.

	fmt.Println("Hello")

	wg.Add(1) // Indicamos que vamos a agregar 1 Gorutine al WaitGroup para que espere su ejecucion antes de que la gorutine base (main) muera, y así le de tiempo a la siguiente gorutine de ejecutarse

	go say("world", &wg) // la palabra reservada go ejecutará la funcion de forma concurrente

	wg.Wait() // Funcion del WaitGroup que sirve para decirle al gorutine principal (main) que espere hasta que todas las gorutine del WaitGroup finalicen, es decir, hasta que se ejecute 'defer wg.Done()' en cada una de las goroutines

	go func(text string) { // Funciona anonima
		fmt.Println(text)
	}("Adios")

	time.Sleep(time.Second * 1) // ! Funcion para que cuando llegue a esta linea espere el tiempo indicado (lo suficiente para que la Gorutine ejecute su funcion de forma concurrente)

	// Nota: Para fines practicos se hace uso de la funcion Sleep(), pero en realidad NO es una buena practica, es mejor utilizar los WaitGroups

}

- Usualmente los **WaitGroups** no se utilizan ya que, aunque le dan más optimización al código, suelen
ser complejos de mantener en el largo plazo. En su lugar existen los **channels**. Son grosso modo, 
canales en los que se comunican las gorutine. 

# Channels: La forma de organizar las goroutines
Los channels manejan de forma nativa la comunicación entre ellos además de otros datos primitivos. 
Como por ejemplo, los WaitGroups. 

- Un channel, es un conducto en el cual solo puedes manejar un tipo de datos. 

```Go 
package main 

import "fmt"

// La flecha indica que ese canal solo es de entrada de datos
// Es una buena práctica indicarlo en todo momento
// Si fuera solo de salida seria: c <- chan string
func say(text string, c chan<- string) {
	// El canal y el dato que le pasamos, deben de ser del mismo tipo de dato
	c <- text // para indicar que vamos a ingresar el texto al canal
}
func main(){
	// Una buena práctica es indicarle el número de goroutines que manejaremos 
	// Podemos no hacerlo y dejarlo dinamico. 
	c := make(chan string, 1)
	
	fmt.Println("Hello")
	
	// Indicamos la función como goroutine 
	go say("Bye", c)
	
	// Para garantizar que la goroutine del main espere la ejecución de la función "say"
	// Extraemos la salida del canal
	fmt.Println(<-c) // si para ingresar el dato, el chanel estaba de lado izquierdo de la flecha
	// Para sacarlo, channel esta de lado derecho de la flecha
}
```

Si comparamos los chanels contra los WaitGroups, suele ser menos eficiente por la complejidad. 
Sin embargo, si lo ponemos en una balanza, es mucho más eficiente en tiempo de desarrollo el uso de 
Channels. Si ocupamos una gran optimización, mejor usar los WaitGroups. Pero de no ser el caso.
Los channels seran la mejor opción.


# Range, Close y Select en channels

```Go 
package main

import "fmt"

func message(text string, c chan string) {
	c <- text
}

func main() {
	c := make(chan string, 2)

	c <- "Mensaje 1"
	c <- "Mensaje 2"

	fmt.Println(len(c), cap(c))

	// Range y close
	close(c)
	//c<-"Mensaje 3"

	for message := range c {
		fmt.Println(message)
	}

	// Select
	email1 := make(chan string)
	email2 := make(chan string)

	go message("mensaje 1", email1)
	go message("mensaje 2", email2)

	for i := 0; i < 2; i++ {
		select {
		case m1 := <-email1:
			fmt.Println("Email recibido de email 1", m1)
		case m2 := <-email2:
			fmt.Println("Email recibido de email 2", m2)
		}
	}
}

```

# Range, Close y Select en channels

```
package main 

import "fmt"

func message(text string, c chan){
	c <- text
}
func main(){
	c := make(chan string, 2) 
	c <- "Mensaje1"
	//c <- "Mensaje2"
	
	//len() me dice cuantos datos o cuantas goroutines hay dentro del channel
	//cap() me dice la cantidad máxima que puede almacenar el channel
	fmt.Println(len(), cap())
	>> 1 2
	c <- "Mensaje2"
	
	// Range y Close
	// Close lo que hace es decirle al runtime de go, que va a cerrar el canal 
	// Por lo que ese canal no va a recibir ningun dato más, tenga o no capacidad. 
	// LO IDEAL ES CERRAR LOS CANALES CUANDO SE DEJAN DE USAR
	close(c)
	
	c <- "Mensaje3"
	>> exit status 2 error
	
	for message := range c {
		fmt.Println(message)
		>> Mensaje1
		>> Mensaje2
	}
	// Range es ideal para cuando queremos iterar entre cada uno de los elementos
	// de un canal que usualmente esta abierto o con datos desconocidos. 
	
	// Cuando manejamos varias canales y no tenemos certeza de cuál es el que va a 
	// responder primero. Es ahí cuando utilizamos select 
	// Select
	email := make(chan string)
	email2 := make(chan string)
	go message("Mensaje1", email1)
	go message("Mensaje2", email2)
	for i:=0; i < 2; i++ {
		select {
			case m1 := <-email1: 
				fmt.Println("Email recibido de email1", m1)
			case m2 := <-email2: 
				fmt.Println("Email recibido de email2", m2)
		}
	}
}
```

# Go get: El manejador de paquetes

- Para paquetes de terceros: https://awesome-go.com/
```Bash
// Para instalar paquetes es con go get RouteOrNamePackage
$ go get golang.org/x/website/tour 
// -v indica "verbosidad". De esta manera podemos ver el output de lo que instala
$ go get -v golang.org/x/website/tour
// Lo ideal es usar -v -u con esto indicamos que este o no instalada, nos muestre
// el ourput de lo que esta instalando/reinstalando
$ go get -v -u golang.org/x/website/tour
```

# Go modules: Ir más allá del GoPath con Echo 

- Instalar Echo en su última versión estable: `go get -v -u github.com/labstack/echo`

```Go
package main

import (
	"github.com/labstack/echo"
	"net/http"
)

func main() {
	// Instanciar echo
	e := echo.New()

	e.GET("/", func(c echo.Context) error {
		return c.String(http.StatusOK, "Hello world")
	})

	e.Logger.Fatal(e.Start(":1323"))
}
```


# ¿Con qué seguir? 

- Gophers Slack: [gophers.slack.com](http://gophers.slack.com/)
> Es un canal de slack en el que podrás encontrar canales de todo tipo referentes a Go. 
- Go tour: [tour.golang.org](http://tour.golang.com/)
> Es un tour sobre lo básico en Go
- Golang Weekly: [golangweekly.com](https://golangweekly.com/)
> Es una newsletter donde semanalmente llegan noticias del estado actual del lenguaje
- Play With Go: [play-with-go.dev](https://play-with-go.dev/)
> Es una plataforma que esta enfocada en que lleves a la práctica tu código en Go. Tiene
ejercicios prácticos y teoría. Puedes ejecutar tu código directamente en el navegador, por lo que
un editor no es necesario
- Go by example: [gobyexample.com](https://gobyexample.com/)
> Colocan ejemplos a nivel práctico sobre como resolver ciertos aspectos del lenguaje. 
- Go Time: [Spotify](https://open.spotify.com/show/2cKdcxETn7jDp7uJCwqmSE?si=q88UkEYQTxS0t1QVws22tw&amp;nd=1)
> Es un canal dedicado a Go en el que están compartiendo el estado del arte de Go. 









