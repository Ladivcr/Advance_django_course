# Curso Práctico De Arquitectura Backend

# Qué son los sistemas distribuidos

- **Sistema Monolítico:** Es un sistema conformado por una sola "pieza". 
- - Ejemplo de sistema monolítico: Un único servidor que hospeda uno o más sitios web con LAMP (Linux, Apache, MySQL, PHP) stack 
- **Sistema Distribuido:** Compuesto de múltiples componentes que se comunican entre si usando redes

# Elementos de un sistema distribuido en la nube

Elementos que podemos encontrar
- Load Balancers
- Máquinas Virtuales
- Bases de Datos (Relacionales y No Relacionales) 
- Servicios de Colas (ej. SQS) 
- Servicios de Storage (ej. S3)
- Servicios Publisher-Subscriber (ej. SNS) 
- Pipelines
- etc... 

# Cómo se conecta todo en el backend

El backend de un sistema puede estar conformado por múltiples componentes para su funcionamiento 

Sin embargo, independientemente de la implementación, **generalmente debe exponer una API (Interfaz de Programación de Aplicaciones**). 

# Documento de diseño 
Antes de realizar una arquitectura, primero, debemos tener la descripción de lo que se busca realizar así como 
las especificaciones de ello. Todo esto viene descrito en lo que se llamada "el documento de diseño". 
Una muestra de lo que sería un documento de diseño la podemos encontrar [aquí](https://github.com/jorgevgut/airquality-mx/wiki/High-level-System-Design)

# Diseño a bajo nivel 

Una vez tenemos un primer bosquejo/diagrama de la arquitectura (diagrama agnostico, es decir, no hemos especificado que herramientas se van a 
utilizar). Podemos realizar el diseño a bajo nivel, que se refiere a especificar con mucho detalle, cómo va a funcionar cada una de las secciones
que hemos realizado previamente en el diagrama agnostico de la arquitectura. Desde que tecnologías vamos a utilizar, hasta como se van a comunicar
entre ellas.

# Escenarios Trade off
Sacrificar una cosa por otra. Esto no es necesariamente malo, pero hay que tener en cuenta que cada decisión que tomamos puede afectar a otra cosa.
Cuando nos encontramos en un escenario Trade off, no hay decisiones buenas o malas. Pero es necesario que evaluemos que vamos a sacrificar
a cambio de que y si esto vale la pena. Así como pensar en las consecuencias que esto puede tener a futuro. 

# Algunas definiciones

### Stateless (sin estado)

En un servicio, se refiere a que cada solicitud será única y no tendrá ningún tipo de relación con alguna solicitud anterior, es decir, no se va a 
guardar nada, cada transacción iniciará desde 0. 

> Analogía: Imagina una computadora SIN disco duro, cada proceso que haga esta computadora no se va a guardar, imagina que por cada proceso, enciendes la computadora, hacer el proceso y luego la apagas de nuevo, eso es stateless.

En cambio, **Statefull** sí que puede guardar cosas y comunicarse con procesos anteriores, usar datos generados de un proceso para hacer otro proceso.

### Horizontal Scaling (escala horizontal)

Anteriormente, cuando un sistema crecía y empezaban a incrementar la cantidad de solicitudes al servidor en miles de solicitudes por segundo
solíamos pensar que simplemente teníamos que agregarle un mejor CPU, más memoria RAM, más discos duros, mejorar la conexión a internet…
¿Pero qué pasaba si mi demanda aumentaba a millones, pero yo ya tenía el servidor más potente del mundo y no podía agregarle nada más
y aun así no abastecía para satisfacer millones de usuarios?

**A esto se le llama escala vertical**, sin embargo, poco a poco se fue adoptando **el concepto de escala horizontal** en donde, en lugar de
tener un servidor superpotente con el mejor procesador y teras de RAM, podemos tener varias computadoras atendiendo esas miles solicitudes,
y si la demanda crece a millones, nos basta con simplemente agregar más computadoras que puedan atenderlas.

> Aportación de: RetaxMaster


### Throtling
Es básicamente hacer que tu servidor devuelva un error intencionado, no es un error real. Se suele hacer cuando se tiene que lidiar con muchas 
peticiones en un corto tiempo. Para no sobrecargar el servidor y que eventualmente el servicio falle.

### BackOff
Es el cómo manejamos los retry’s, es decir, en lugar de hacer el retry un segundo después, se pospone a que sea realizado X segundos después, cuando es posible que el servidor tenga menos peticiones.

> Aportación de RetaxMaster

# Algunas preguntas y planteamientos de interés

- **¿Por qué se refiere a algunos sistemas como sistemas "monolíticos"?**
> Se representan en una sola pieza de arquitectura, usando múltiples
tecnologías y hasta diferentes lenguajes de programación, pero se ejecutan
en un solo servidor remoto.

- **¿Cuál de los siguientes ejemplos es característico de un sistema 
distribuido y verdadero para TODOS los sistemas distribuidos?**
> Cada componente puede representarse como un nodo en una red y pueden 
comunicarse entre sí utilizando protocolos como, por ejemplo, HTTP, RTCP, 
TCP/IP.

- **En el contexto de Arquitectura de Software y sistemas en backend,
selecciona la opción que mejor describe a un "documento de diseño".**
> Un documento que pretende solucionar problemas impuestos por ciertos casos 
de uso, generalmente requerimientos de negocio. Establece un objetivo claro 
del problema a resolver y detalla elementos técnicos sean a alto o bajo 
nivel, tales como arquitectura, plan de implementación y modelado de datos, 
con tal de ofrecer solución a los problemas.

- **¿Para qué sirve un diagrama de secuencias?**
> Sirve para demostrar cómo interactúan diferentes elementos en un proceso o 
que son parte de un mismo sistema.

- **¿Cuál de las siguientes es una práctica generalizada y altamente 
recomendada al elaborar documentos de diseño?**
>  Tener un "design review" en donde otras personas puedan ofrecer 
retroalimentación con tal de mejorar el diseño actual.

- **¿Por qué es valioso incluir información acerca de los "límites" de un 
diseño arquitectónico de software?**
> Conocer los límites del sistema nos brinda información valiosa acerca de 
cómo el mismo puede escalar, así como puede servir de referencia para los 
casos de uso que se desean soportar.

- **Antes de comenzar el desarrollo, ¿cual de éstas es la mejor idea para 
incluir en un documento de diseño para asegurarnos que estamos tomando las 
mejores decisiones?**
> Incluir además de la solución propuesta, por lo menos, una alternativa.

- **¿Cuál de las siguientes afirmaciones es verdadera en cuanto a bases de 
datos**
> Es posible crear una base de datos que solamente se utilice para realizar 
operaciones de escritura, replicar dicha base en un clúster de decenas de 
bases de datos que solo se utilicen para lectura y con ello lograr menor 
latencia para tráfico que corresponda a miles de usuarios concurrentes que 
consulten información.

- **¿Cuál de estas herramientas puede utilizarse para disminuir la latencia 
pero sacrificando consistencia?**
> Caché. 
