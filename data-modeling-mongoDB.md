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


# [Workload](https://drive.google.com/file/d/1vjUfujfZNQWKqbymEYwRLbHSgoHTVvKI/view)

El Workload o Carga de trabajo se construye tomando en cuenta los Escenarios, los Expertos y el Sistema Actual y
nos permite identificar que cosas tenemos y como se comportan para así empezar a tomar decisiones a nivel de
diseño en nuestra base de datos.

Para construir el Workload podemos usar un documento (no limitativo) que nos permita empezar a definir el modelado
y saber que aspectos debemos tener en cuenta al momento de diseñar la base de datos. El documento puede tener las 
siguientes secciones:

- **Casos de usos:** Describimos lo mas importante acerca del caso de negocio que se esté manejando.
- **Sección principal:** Se resaltan los actores principales.
- **Suposiciones acerca del negocio:** Establecemos ciertas declaraciones que pueden ir variando a través del tiempo.
- **Operaciones:** Se detallan mas a fondo los actores que influyen en nuestro negocio y la forma en la que se relacionan
  con nuestra base de datos **resaltando aspectos importantes como: frecuencia, información que se envía, tipo de operación, etc.**
- **Entidades:** Creamos ciertas entidades que existen en nuestro negocio, así como suponer ciertas cosas sobre ellas gracias a la
  información suministrada por los expertos en el area.
- **Observaciones finales:** Pueden ser acotaciones generales con respecto a la información recolectada.


**📌 Mongo Atlas posee un sistema de replicación y cuando escribimos en una base de datos puede existir un delay mientras se replica la información en otros nodos.**

# Validando strings

```Bson
use("platzi_store")
db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['email', 'password'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                last_name: {
                    bsonType: 'string'
                },
                email: {
                    bsonType: 'string',
                    pattern: "^[A-Za-z\d.-]{1,}@[A-Za-z\d.-]{1,}[.]{1}[A-Za-z\d.-]{1,}$"
                },
                password: {
                    bsonType: 'string',
                    pattern: "^.{16,40}$"
                }
            }
        }
    }
})
```

El código anterior crea una colección llamada "users" con múltiples validaciones a efectuar a la hora de que se inserta un nuevo dato a la colección. Toma en consideración que si ya insertaste, debes de eliminar esos datos y primero crear el schema. 
En caso de que quieras modificar la validación, es posible usar [`collMod`](https://www.mongodb.com/docs/manual/core/schema-validation/update-schema-validation/)

# Validando enums, numbers y booleans
```Bson
use("platzi_store")
db.createCollection('users', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['email', 'password'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                last_name: {
                    bsonType: 'string'
                },
                email: {
                    bsonType: 'string',
                    pattern: "^[A-Za-z\d.-]{1,}@[A-Za-z\d.-]{1,}[.]{1}[A-Za-z\d.-]{1,}$"
                },
                password: {
                    bsonType: 'string',
                    pattern: "^.{16,40}$",
                    description: "must be a string between 16 or 40 characteres and is required"

                },
                age: {
                  bsonType: "number",
                  minimum: 18,
                  maximun: 99
                },
                isSingle: {
                  bsonType: "bool"
                },
                role: {
                  enum: ["customer", "seller", "admin"]
                }
            }
        }
    }
})
```
Podemos ver que la manera de validar un número es muy sencilla, se hace uso de: `minimum` y `maximun`. En el caso de un boleano 
basta con usar `"bool"` y en el caso del enum es muy sencillo. Es un arreglo con las opciones validas.


**NOTA:** Observa que para validar el `password` y el `email` hemos hecho uso de `pattern` para poder usar expresiones regulares. 


# Validando arrays y subdocumentos

Supongamos que tenemos el siguiente `insertOne` en mongo:
```Bson
use("platzi_store")

db.products.insertOne({
    name: "Camiseta",
    sizes: ["XL"],
    category: {
        name: "name category",
        image: ""
    }
})
```
Para validarlo sería creando el `jsonSchema` siguiente: 

```Bson
use("platzi_store")
db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name'],
            properties: {
                name: {
                    bsonType: 'string'
                },
                sizes: {
                    bsonType: "array",
                    minItems: 1,
                    uniqueItems: true,
                    items: {
                        bsonType: "string"
                    }
                },
                category: {
                    bsonType: "object",
                    required: ["name"],
                    properties: {
                        name: {
                            bsonType: 'string'
                        },
                        image: {
                            bsonType: 'string'
                        },
                    }
                }
            }
        }
    }
})
```
Podemos observar dos cosas. Para validar un array, basta con indicar el tipo de objetos que debe de llevar ese array, así como 
indicar el mínimo (o incluso el máximo) de objetos. Así como indicar si son objetos únicos o no. 
Y para el caso de validar subdocumentos es prácticamente anidar un `jsonSchema` ya que validas lo que va dentro de
ese subdocumento. 
