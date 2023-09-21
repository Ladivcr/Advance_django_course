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

# Tips para validación en MongoDB

Supongamos que buscamos garantizar que la base de datos solo acepte los registros con los campos indicados en el `jsonSchema`. P
Esto sería un poco quitarle flexibilidad a Mongo pero en caso de ser necesario se hace añadiendo la propiedad: 
`additionalProperties: false`. Que por defecto viene como `true`.

```Bson
use("platzi_store")
db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name'],
            additionalProperties: false,
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
**IMPORTANTE:** Cuando se coloca la propiedad `additionalProperties` en false, también se debe agregar obligatoriamente la
propiedad _id en el array de required y además validarlo en properties. De lo contrario Mongo no permitirá la inserción de documentos,
así tengan la estructura correcta.
Por lo que la validación anterior, debería quedar de la siguiente forma: 
```Bson
use("platzi_store")
db.createCollection('products', {
    validator: {
        $jsonSchema: {
            bsonType: 'object',
            required: ['name', "_id"],
            additionalProperties: false,
            properties: {
                name: {
                    bsonType: 'string'
                },
                _id: {
                    bsonType: "objectId"
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
### Obteniendo los `jsonSchemas` existentes

Si por ejemplo, no contamos con una documentación que nos indique cuáles son los `Schemas` existentes. Podemos obtener la información
sobre los schemas en la base de datos haciendo: 
```Bson
use("platzi_store")
db.getCollectionInfos()
```

### Cambiando valores del schema sin eliminar el schema

Una vez que hemos revisando el schema que deseamos cambiar. Por ejemplo, queremos cambiar el valor de `additionalProperties` que esta 
en `false` por `true`. Tenemos que hacer lo siguiente: 

```Bson
use("platzi_store")
db.runCommand({
    collMod: "products",
    validator: {
            $jsonSchema: {
                bsonType: 'object',
                required: ['name'],
                additionalProperties: true,
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
**Nota que debemos de pasar toda la información del validador del schema** pero únicamente cambiando el valor
del campo que buscamos modificar. Tenemos que pasar todo porque va a reescribirlo, básicamente. 
**Toma en consideración que para hacer eso es necesario que el usuario cuente con permisos de administrador en la base de datos**.


# Embeber vs. Referenciar

En las bases de datos relacionales tenemos tres tipos de relaciones: 1:1, 1:N y N:N.
En el caso de bases de datos como Mongo, la manera en la que expresamos estas relaciones
es mediante: Embebido o Referenciado. 

Para realizar el modelamiento de datos manejamos 2 formas de realizarlo:

- **Embeber:** Usar sub-documentos para realizar las relaciones, que esta un documento dentro de otro.
- - Mejora rendimiento en busqueda de muchos datos relacionados
- - Limitado a 1-1 y 1-N en una direccion
- - Cambios contenidos

- **Referenciar:** Los documentos estan separados y se hacen referencia entre ellos con identificadores. En UML, se expresan con cajitas separadas y una cardinalidad.
- - Reduce el tamaño de la base de datos
- - No repetir datos
- - Actualizacion de datos unica para muchos
- - Permite 1-1, 1-N, N-1 y N-N


Una de estas dos tecnicas de modelamiento se utilizara en base al uso que necesitemos. Pero una
forma de poder abarcarlo es realizando algunas de estas preguntas:

- ¿Que tan frecuente es consultada la informacion?
- ¿Que tan frecuente se actualiza la informacion?
- ¿La informacion se consulta en conjunto o por partes?

> Si se consulta en conjunto se recomienda EMBEBIDA
> Si se consulta por partes se recomienda REFERENCIADA
> En el 90% de los casos, cuando hay una relacion 1:1, esta suele estar EMBEBIDA.

# Relaciones 1 a 1 embebidas

```Bson
use("platzi_store")

db.users.insertOne({
    email: "tester2@gmail.com",
    password: "tartaglia",
    role: "customer",
    social_accounts: ["twitter", "facebook"],
    address: {
        street: "cr 891",
        city: "Cali",
        zip: "11011"
    },
    shipping_address: {
        street: "cr 223 12",
        city: "Cali",
        zip: "13011"
    }
})
```
Como puedes observar, en el caso de relaciones 1:1 embebidas ya las hemos trabajado anteriormente.
Y las consultas que les aplicamos son realmente sencillas: 
```Bson
use("platzi_store")

db.users.find({
    "address.city": "Bogota"
}).count()
```
Podemos hacerlas directas al propio subdocumento debido a que esta embebido.

**OBSERVACIÓN PARA SABER CUANDO USAR UNA RELACIÓN EMBEBEBIDA:** Si la información se consulta en
conjunto, es decir, cuando hace parte **necesaria** de esa información. O sea, cuando los 
subdocumentos hacen parte de una dependencia directa del documento (i.e. Ordenes de compra y sus items).
En ese caso se recomienda **EMBEBIDA**

# Relaciones 1 a 1 referenciadas

Uno de los casos donde se usa la relación REFERENCIADA, es cuando el documento ya es muy grande, 
cerca del límite de 16 mb y mejor se saca información para mejorar el rendimiento.

También se pueden usar combinados, si usas el ObjectId, para referenciar el total de datos y
agregar los 2 o 3 campos de los más comunes que se usan juntas para evitar la consulta a la 
2da colección.

Supongamos que tenemos el siguiente documento referenciado
```Bson
use("platzi_store")

db.stores.insertOne({
    storeId: "ST001",
    name: "SoBlanc Store",
    address: "Cr 234"
})


db.stores_details.insertOne({
    storeId: "ST001",
    description: "lorem ipsum",
    manager: {
        email: "tester@test.com",
        cellphone: "21321321312"
    }
})
```
Para realizar la consulta y obtener los datos de ambas colecciones podriamos hacer dos consultas pero no es lo recomendable. 
Cuando trabajamos con datos referenciados se hace mucho uso del `aggregationFramework`
```Bson
use("platzi_store")

db.stores.aggregate([
    { 
        $lookup: {
        from: "stores_details",
        localField: "storeId",
        foreignField: "storeId",
        as: "detail"
        }
    }
   
])
```
- `from:` Indica a que colección quieres ir 
- `localField:` Indica el campo que esta dentro de stores y va a permitir realizar el enlace
- `foreignField:` En la otra colección, cuál es el atributo que va a permitir el enlace
- `as:` En dónde va a dejar esa relación, es decir, el nombre con el que añadira el subdocumento en el resultado

**NOTA:** La mejor práctica es expresar las relaciones de manera embebida, a menos que el documento ya este muy grande, cambiamos a una
forma referencial. Pero lo recomendable es embebebido. 

# Relaciones 1 a muchos embebidas

# Relaciones 1 a Muchos embebidas

La relacion embebida 1 a muchos embebida, es tener una lista (arreglo) de sub-documentos de una 
coleccion. El documento puede tener varios sub-documentos de una coleccion y esos sub-documentos 
dependen del documento padre y solo tienen ese.

### Casos de uso
- Cuando la informacion es consultada en conjunto
- El arreglo de subdocumentos no peligre el limite de 16MB
- Cuando los sub-documentos son una dependencia
- Cuando los dub-docs son 1:few (1 a pocos)

**Ejemplo:**
```Bson
use("platzi_store")

db.orders.insertOne({
    user_id: ObjectId('650b177248ce4449ebaec6fe'),
    date: "2022-12-12",
    items: [
        {
            name: "camiseta",
            price: 120, 
            qty: 1
        },
        {
            name: "pantalón",
            price: 200, 
            qty: 2
        }
    ]
})
```

**Para consultar:**

```Bson
use("platzi_store")

// Buscar algo en concreto de las ordenes
db.orders.find({
  "items.qty": 2
})
```

# Relaciones 1 a muchos referenciadas

En las relaciones 1 a muchos referenciadas un documento puede estar asociado a otros documentos
de otra coleccion, esto mediante una identificacion que normalmente estan en la otra coleccion y
que indican al documento.

### Casos de uso

- Cuando la relacion puede incrementar considerablemente
- Cuando la entidad se actualiza de forma constante
- Cuando la entidad es usada por muchos documentos

### Ejemplo

Se tiene que un usuario puede tener varias ordenes. Entonces mediante una relación  con una
identificacion de usuario en las ordenes de compra se puede saber a que usuario pertenecen.

```Bson
// Para buscar las ordenes asociadas al usuario
db.orders.find({
    user_id: ObjectId('6497b8b4affb4e4355c4f297')
})
```

Pero hay un problema, vamos a obtener las ordenes pero del usuario no obtendremos su información, 
más que el ID. 
Para solucionar eso, recurrimos al ``aggregation framework``.

```Bson
// para un usuario, mostrarme sus ordenes
// Lookup del agregation framework
db.users.aggregate([
    {
        $lookup: { // join
          from: `orders`,
          localField: `_id`,
          foreignField: 'user_id',
          as: 'orders'
        }
    }
])
```
Pero ¿qué pasa si quiero hacer la consulta a una sola orden de compra?
Para ello hacemos uso de `$match`

```Bson
db.orders.aggregate([
    {
        $match: { // filtrar
          _id: ObjectId('650c843f25d85506e1a41a65') // order id
        }
    },
    {
        $lookup: { //Join
          from: `users`,
          localField: `user_id`,
          foreignField: '_id',
          as: 'user'
        }
    }
])
```

# Relaciones muchos a muchos

La relacion muchos a muchos (N-N) es cuando un documento de una coleccion `A` puede estar relacionado 
con varios documentos de una coleccion `B` y viceversa.

Esta relacion es siempre Referencial.

**Se pueden realizar de 2 formas:**

- Con una coleccion intermediaria, que hace de puente entre 1 o más colecciones.
- Embeber dentro de cada documento un arreglo con los identificadores de sus relaciones.

**Casos de uso**

- Usar referencia cuando la relacion es N-N

**Ejemplo:**

Un producto puede pertenecer a varias tiendas y una tienda puede tener varios productos. 
Esto ya nos dice que lo debemos realizar un arreglo para referenciar.

Se utiliza una nomenclatura como cualquier otra propiedad pero con un doble corchete y de tipo ObjectId: products_ids[]:<ObjectId>.

Para **Insertar productos** es de la siguiente forma: 
```Bson
db.products.insertMany([
    {
        name: 'Product 1',
        sizes: ['L', 'M'],
        price: 12   
    },
    {
        name: 'Product 2',
        sizes: ['S', 'M'],
        price: 9   
    },
    {
        name: 'Product 3',
        sizes: ['L', 'M', 'XL'],
        price: 16   
    },
])
```
**Insertar las tiendas en las que se encuentran esos productos**

```Bson

db.stores.insertMany([
    {
        name: 'Store A',
        products_ids: [
            ObjectId("64991cdf44ec03dd012ecccd"),
            ObjectId("64991cdf44ec03dd012eccce")
        ]
    },
    {
        name: 'Store B',
        products_ids: [
            ObjectId("64991cdf44ec03dd012ecccc"),
            ObjectId("64991cdf44ec03dd012eccce")
        ]
    },
])


```

**Relizar consultas a los productos**

```Bson 
db.stores.aggregate([
    {
        $lookup: {
          from: 'products',
          localField: 'products_ids', // automaticamente detecta que es una lista
          foreignField: '_id',
          as: 'products'
        }
    }
])
```
# Referencias circulares o bidireccionales

Forma parte del N-N. Donde cada coleccion tiene documentos que apuntan a todos los relacionados
de otra coleccion (O en la misma). O sea, tenemos la referencia del documento `A` al documento
`B` y del documento `B` al documento `A`

### Casos de uso

- Usa refencia cuando la relacion es n-n
- Cuando la información es consultada en conjunto. Por si necesitamos las referencias que tiene algun documento sin importal cual sea. Para resolver más facil relaciones y rapido.


Ahora trabajemos en la otra referencia.
Facilitar la busqueda de ID

Se hace de la siguiente forma: 

```Bson
db.products.aggregate([
  { 
    $lookup: { // buscar las id que necesitamos
      from: 'stores',
      localField: '_id',
      foreignField: 'products_ids',
      as: 'stores'
    }
  },
  {
    $project: { // filtrar para ver mejor las id
      _id: 1, // id producto
      stores: { // en tiendas
        _id: 1 // id tienda
      }
    }
  }
])
```

Modificar un producto para añadir la referencia al documento
```Bson

// prod 1
db.products.updateOne(
    {_id: ObjectId('649923c970dfee1c60f23f54')},
    {
        $set: {
            stores_ids: [
                ObjectId("649923f457514437ac501dd4")
            ]
        }
    }
)

// prod 2
db.products.updateOne(
    {_id: ObjectId('649923c970dfee1c60f23f55')},
    {
        $set: {
            stores_ids: [
                ObjectId("649923f457514437ac501dd4"),
                ObjectId("649923f457514437ac501dd5"),
            ]
        }
    }
)

//prod 3
db.products.updateOne(
    {_id: ObjectId('649923c970dfee1c60f23f56')},
    {
        $set: {
            stores_ids: [
                ObjectId("649923f457514437ac501dd5")
            ]
        }
    }
)
```

Para ver las tiendas en el producto se hace de la forma

````Bson
use("platzi_store")

db.products.aggregate([
  { 
    $lookup: { // buscar las id que necesitamos
      from: 'stores',
      localField: 'stores_ids',
      foreignField: '_id',
      as: 'stores'
    }
  }
])

```
