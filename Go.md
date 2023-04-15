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

