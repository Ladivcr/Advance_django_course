# Flutter advance course

## ¿Qué es una Arquitectura de software?

- Una arquitectura de software se encargará de estructurar, diseñar y proyectar un proyecto. 
**Indica la estructura, funcionamiento e interacción** entre las partes del software; nos ayuda
a tener el código organizado para que todo el equipo pueda verlo. 

### ¿Cómo saber que ya ocupo usar una arquitectura en mi aplicación? 
- El equipo es muy grande y ya hay múltiples roles involucrados
- Trabajo con solicitud y envío de datos a internet
- Limpio, transformo y preparo los datos
- Inserto y obtengo datos de una base de datos

**Ejemplos de arquitecturas en Flutter: **
- Vanilla
- Scoped Model
- BLoC (probablemente el más famoso)

## Vanilla
- Aquí, la lógica y la vista se colocan en el Widget. Su **principal beneficio** es que es simpel y autónoma.
Conectado en cualquier parte de tu aplicación, recuperará y renderizará datos. 
> Por otro lado, escribir widgets de esta manera puede generar caos en el documento de vista de la app.
> Sobre todo cuando la lógica empieza a extenderse a bifurcarse o es más avanzado.

## Scoped Model 
- Es una librería de terceros. Aquí, cuando un Widget cambia de estado se reconstruye el widget englobado 
dentro de ScopedModelDescendant. 

# ¿Qué es el patrón BLOC? 
> BLoC = Business Logic Component
- Es un patrón de diseño que separa la lógica de negocio de la interfaz gráfica
- Es un sistema de gestión de estado para Flutter recomendado por los desarrolladores de Google. 
Ayuda en la gestión del estado y en el acceso a los datos desde un lugar central del proyecto. 

**BLoC Pattern**
- **View (UI Screen)**: Contendrá toda la interacción con las vistas & Podemos organizarla en screens y widgets
- **BLoC**: La capa de negocio estará contenida aquí. **Casos de uso: Login, Logout** & Toda vista que tenga una lógica de negocio deberá tener un componente BLoC  
- **Repository**: Se concentran las clases que se conectan con una fuente de datos -> API, Endpoints, DataBase, etc
- **Data / Model**: Son nuestros modelos que nos ayudan a manejar los datos & **PODO** Plain Old Dart Object

En este momento las carpetas dentro de **lib/src** debería ser: **blocs**, **models**, **resources**, **ui** 


# BLoC + Clean Architecture 

Como se puede observar la arquitectura BLoC no es muy descriptiva con las carpetas sin embargo, si aplicamos 
la arquitectura **Clean Architecture** lo que obtendríamos sería algo como: **Place**, **User**, **Widgets**
Que ya es más descriptiva a primera vista. Ahora dentro de estas carpetas aplicamos la arquitectura BLoC. Obtenemos una estructura de carpetas
altamente descriptiva para ususarios nuevos y muy organizada por dentro. 


