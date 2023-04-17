# Curso básico de programación en Go

- Go online: https://go.dev/play/

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


