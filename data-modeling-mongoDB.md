# Conceptos fundamentales de NoSQL y MongoDB

- MongoDB es una base de datos documental}
  
Para modelar de una forma correcta es importante tener claro los siguientes conceptos:

-** Los datos son almacenados en documentos legibles**, los documentos se almacenan en formato JSON (JavaScript Object Notation),
  en donde los datos se almacenan en pares clave-valor. Sin embargo, el formato JSON es usado solo para el formato de lectura
  ya que internamente o en el proceso de escritura, MongoDB utiliza el formato BSON que es un formato binario que proporciona mayor rendimiento.
- **Los documentos son almacenados en colecciones**, lo cual nos indica que en esa colección se guardan documentos que comparten información.
  Las colecciones pueden ser: Usuarios, Productos, Categorías, etc.
- **El Diagrama ER (Entidad Relación), es un diagrama que nos permite modelar y visualizar nuestros datos**, además de
  conocer como están relacionadas nuestras entidades. La entidad no son mas que las colecciones previamente definidas y
  la relación son lineas que unen estas entidades para indicar como éstas interactúan entre sí.

# Metodología para el modelamiento de datos

Uno de los aspectos mas importantes a tener en cuenta al momento de modelar los datos son las restricciones que se
tienen en los distintos ambientes ya que estas condicionan los recursos que tenemos disponibles.

## Restricciones

- Cantidad de memoria RAM → a mayor cantidad de RAM, mayores son los costos
- En donde se almacena la información
- - a. Disco mecánico → Son ideales para almacenar información a través del tiempo (históricos de datos)
- - b. Disco de estado solido → Son ideales para información de consultas rápidas.
- - c. RAM → Son ideales para consultas mucho mas rápidas que en un disco de estado de solido pero aumenta los costos si guardamos mucha información.
- **Cada documento en MongoDB puede tener un peso máximo de 16MB.**
- Latencia → En donde está ubicado el usuario y cuanto le cuesta llegar al servidor que provee la información.
  A esto se le conoce como un CDN (Content Delivery Network) que se encarga de generar una copia de la base de datos
  a través de un cluster y ver de forma más rápida hacia donde nos conectamos para que el usuario tenga la información
  más rápida posible. Estas replicas pueden llevarse a cabo haciendo uso de Mongo Atlas.
- Restricciones del negocio.

**Para tener todos estos aspectos en cuenta usaremos una metodología de tres fases**

## Metodología

1. Requerimientos → Escenarios de nuestro sistema y como modelarlo.
2. Identificar ER
3. Aplicar patrones → Consultas con mejor rendimiento y pensadas para determinados escenarios.

Cada una de estas fases tendrán ciertos aspectos que debemos evaluar los cuales se explican a continuación:

- **Escenarios:** Los distintos escenarios que se van a presentar con respecto a nuestro modelo de negocio
  (Como un usuario usará la app, donde podrá editar sus mensajes o como comprará un producto)
- **Expertos:** Incluir expertos relacionados con el tema del negocio que se está construyendo
  (Si se está construyendo un E-Commerce, entonces necesitamos a alguien experto en el area)
- **Sistema Actual:** Saber como funciona el sistema actual (si existe). Si el sistema no existe se debe evaluar
  como gestionan y llevan a cabo las tareas en el presente.
- **DB Admin:** El experto en modelado que une todas las características para llegar a un resultado.

Ahora, hablemos de los resultados que vamos a obtener

- **Workload (carga de trabajo):** Es un documento final que se construye gracias a los **Escenarios, Expertos y el Sistema Actual**.
  Este documento nos permite identificar relaciones, operaciones mas comunes, tamaño de los datos, consultas e indices y plantear
  hipótesis sobre posibles escenarios.
- **Relaciones:** Las podemos obtener juntando el **Sistema Actual y al DB Admin**. En este punto podremos identificar las entidades,
  las relaciones, los atributos, las distintas restricciones y decidir si embeber o referenciar.
- **Patrones:** Con el modelo ER ya podremos identificar patrones en el modelo de negocio que nos permiten realizar optimizaciones
  de la carga de trabajo u obtener un mejor desempeño de la misma.

**El resultado final de estos 3 aspectos nos generan a un Diseño**

En el WORkLOAD: Podemos identificar el tamaño de los datos. Consultas e indicies. Operaciones importantes. Suposiciones.

En RELACIONES: Podemos Identificar entidades. Identificar atributos. Identificar relaciones. Embeber vs referenciar.

En PATRONES: Podemos Identificiar y aplicar patrones para que nuestro sistema trabaje mejor.
