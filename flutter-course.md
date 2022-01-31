# Flutter

design files: https://www.uplabs.com/

# ¿Qué es flutter?

Flutter es un SDK de Google creado para diseñar interfaces nativas iOS y Android
> Flutter utiliza el lenguaje de programación Dart y fue creado para programadores de interfaces móviles

Flutter pertenece a la categoría: **Cross Platform**

> Flutter utiliza **skia 2d** que es su engine de renderizado. Que esta desarrollado con C++

# Dart 

Dart es el lenguaje de programación que usa Flutter para operar.
Es un lenguaje de programación que usa el paradigma de Programación Orientada a Objetos (OOP).
Ha sido creado por Google y es considerado por algunos como “el lenguaje de programación del futuro” por su versatilidad de uso.

Dart se puede usar en dispositivos móviles con Flutter; en el desarrollo web, a través de un framework para el desarrollo frontend
con JavaScript llamado AngularDart, que es una combinación con Angular; e incluso se puede usar en desarrollo backend a través de
frameworks para HTTP servers como Aqueduct.

> **Start Flutter** es una biblioteca de plantillas de Flutter gratuitas para descargar.
> Todos los temas son de código abierto para cualquier uso, incluso comercial.

# Composición del proyecto de flutter
Carpetas: 
- **android**: FlutterActivity, AndroidManifest y todos los archivos que corresponden a un proyecto Android 
- - > Aquí encontramos la base de Android, por si queremos retocar cosas especifícas de Android. Logo de la app etc. Todo con respecto a Android

- **ios**: FlutterAppDelegate, info.plist y todos los archivos que corresponden a un proyecto iOS
- - > Similar a lo de android pero aquí con respecto a iOS

- **lib**: Aquí es donde vive la aplicación Flutter. Concetramos los archivos **.dart**

- **pubspec.yaml**
> Archivo de configuración escrito en YAML. Es un formato de serialización de datos legible por humanos inspirado en lenguajes como XML
> > Para nuestro caso en particular, estaremos concentrando ahí las dependencias del proyecto. Entre otras cosas


# Programación declarativa vs imperativa

## Imperativa 

```javascript
// Imperative style
b.setColor(red)
b.clearChildren()
ViewC c3 = new ViewC(...)
b.add(c3)
```
## Declarativa

```dart
// Declarative style
return ViewB(
  color: red,
  child: ViewC(...),
  )
```

# Estructura de un programa de Flutter 

Para el tipo de _Flutter Application_ la primera línea de código que generalmente nos vamos a encontrar
en nuestros archivos `.dart` es: 
```dart
import 'package:flutter/material.dart';
```

Con esta instrucción importaremos a nuestro código el paquete de todos los Widgets (o la mayoría de ellos) de Material Design
que son la base principal de clases con la que trabaja Flutter.

En Dart, el método **main()** será el punto de inicio de nuestra aplicación. Por su parte, **runApp()** es la función que inicializa
y da vida a la aplicación definida por el Widget App. En otras palabras, **runApp()** toma el widget y lo sirve.

`App()` es la clase principal que representa la raíz de la aplicación. 
Esta clase extiende o hereda de _StatelessWidget_ que es la clase padre de todos los _widgets_.

`App()` posee un método heredado llamado `build()` encargado de construir o mostrar todo el árbol de widgets anidados (o **widgets tree**) que 
hayamos definido con ``MaterialApp()`, que es la clase (que actúa wrapper) que implementa **flutter** para dar vida, forma y apareiencia a todos los widgets de 
nuestra interfaz de usuario. 


La propiedad fundamental del widget `MaterialApp` en la que definimos toda la estructura base de nuestra aplicación es `home:` a la que a su vez asignamos el
widget `Home()` de tipo _StatefulWidget_ es la parte funcional de nuestra app y que retornará a fin de cuentas un ``Scaffold()` que es el widget que contiene
finalmente toda la estructura de nuestra interfaz.


```dart
// --- Estructura estándar de un Scaffold
....
return Scaffold(
  appBar:               , // --- barra de título
  body:                 , // --- contenido principal
  bottomNavigationBar:  , // --- navigación
  floatingActionButton:   // --- botón de acción
)
...
```
