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
