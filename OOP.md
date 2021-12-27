# Paradigma de programación POO
- Surge a partir de problemas que debemos plasmar en código
- Observamos los problemas en forma de **Objetos**
- La POO es un paradigma de programación 
> **Paradigma es la teoría que suministra la base y modelo para resolver problemas**
- POO es una forma de pensar para resolver problemas orientádos en los objetos

**4 Elementos**
- Clases
> Podemos definir una **clase** como un _molde_ para crear **objetos** en donde definimos dos cosas muy
> importantes: **atributos** que son las propiedades que definen a la clase y los **métodos** que son las acciones
> que puede realizar la clase
- Propiedades
- Métodos Objetos

**4 Pilares**
- Encapsulamiento 
- Abstracción 
- Herencia
- Polimorfismo 

# Diagramas de Modelado

Nos permiten plasmar de forma gráfica a través de diagramas nuestro análisis. Servirá de intermediario para poder entender el problema 
y la solución con la orientación a objetos.

**Existen dos herramientas de diagramación:**
- **OMT** (Object Modeling Techniques)
> Metodología que se basa estrictamente en identificar los objetos, sus métodos, sus atributos y cuales son las relaciones que tienen.
> Pero ya está descontinuada.

- **UML** (Unified Modeling Languaje)
> Toma todas las bases y técnicas del OMT, las unifica y permite una ampliación de apicaciones, no solo objetos y clases.
> Sino que incluye casos de uso, actividades, iteración, estados e implementación.

**IMPORTANTE:** Un buen desarrollador debe manejar y dominar con fluidez, conceptos de UML ya que es lo que nos van a entregar cuando empecemos a trabajar
en un proyecto que se haya construido bajo la arquitectura POO.

> Adaptación del comentario de Manuel Mosquera Student Platzi

# ¿Cómo representar los objetos en UML? 

- Las **clases** se representan así: 
<img src="img_courses/uml_clases.jpg">

> En la parte superior se colocan los atributos o propiedades, y debajo las operaciones de la clase.
> **Notaras que el primer caracter con el que empiezan es un símbolo.** ESTE DENOTARA LA VISIBILIDAD DEL ATRIBUTO O MÉTODO. _Esto es un término que tiene que ver con ENCAPSULAMIENTO_.
> Estos son los niveles de **visibilidad** que puedes tener: 

>> **-** = Private

>> **+** = Public

>> **#** = Protected

>> **~** = default

- Una forma de representar las **relaciones** que tendrá un elemento con otro es a través de las flechas en UML, 
- hay varios tipos peor estos son los más comunes: 

## **Asociación**

<img src="img_courses/uml_asociacion_row.jpg">

> Como su nombre lo dice, notarás que cada vez que esté referenciada este tipo de flecha significará que **ese elemento 
> contiene al otro en su definición**. _La flecha apuntará hacía la dependencia._ 

<img src="img_courses/example_asosiacion.jpg">

## **Herencia**

<img src="img_courses/uml_herencia_row.jpg">

> Siempre que veamos este tipo de flecha se estará expresando la herencia.
> **La dirección de la flecha irá desde el hijo hasta el padre**

<img src="img_courses/example_herencia.jpg">

> Con esto vemos que la ClaseB hereda de la ClaseA

## **Agregación**

<img src="img_courses/uml_agregation.jpg">

> _Este se parece a la asociación en que un elemento dependerá del otro_, pero en este caso 
> será: **Un elemento dependerá de muchos otros**. Aquí tomamos como referencia la multiplicidad del elemento. Lo que comúnmente
> conocerías en Bases de Datos como **_Relaciones uno a muchos_**

<img src="img_courses/example_agregation.jpg">

> Con esto decimos que la ClaseA contiene varios elementos de la ClaseB. Estos últimos son comúnmente representados con listas o colecciones de datos

## **Composición**

<img src="img_courses/uml_composition.jpg">

> _Este es similar al anterior_ solo que su relación es totalmente compenetrada de tal modo 
> que conceptualmente una de estas clases no podría vivir si no existiara la otra

<img src="img_courses/example_composition.jpg">
