# Curso básico de programación en Go

- Go online: https://go.dev/play/
- Documentación que incluye paquetes externos: https://pkg.go.dev/?utm_source=godoc
- Documentación de paquetes estandar (Oficial): https://pkg.go.dev/std
- Docuemntación offline: https://zealdocs.org/


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
