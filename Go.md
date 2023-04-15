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
