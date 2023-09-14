# Bases de datos NoSQL
**Tipos de Bases NoSQL**
- **Documentales:** Se empareja cada clave con una estructura de datos compleja que se denomina documento,
    existen otras bases de datos documentales como Cloud Firebase o Couchbase.
- **Grafos:** Se utilizan para almacenar información sobre redes de datos, como las conexiones sociales.
    Neo4j es uno de los ejemplos mas populares de bases datos de este tipo.
- **Clave - Valor:** Son las bases de datos NoSQL mas simples. Cada elemento de la base de datos 
    se almacena como un nombre de atributo (o “clave”), junto con su valor para acceso de memoria rápida.
    Un ejemplo de estas bases de datos es redis.
- **Orientada a columnas:** Estas bases de datos, como Cassandra (la mas popular) o Hbase,
    permiten realizar consultas en grandes conjuntos y almacenan los datos en columnas, en lugar de filas.

**Las bases de datos NoSQL tienen la característica de tener gran facilidad de escalamiento.**
- **Escalamiento vertical:** Incrementar las características de esa misma maquina (+RAM, +CPU, +almacenamiento).
- **Escalamiento horizontal:** Tener una maquina (o nodo) y “copiarla” (ahora tienes varios nodos o maquinas
  con las mismas características), asegurando alta disponibilidad, sistemas de replicacion o tener un
  conjunto que responda en simultaneo.

> Hacer escalamiento vertical es mas fácil pero mas costoso con el paso del tiempo.
> El escalamiento horizontal es mas costoso en el inicio pero luego el precio se mantiene “estándar” con el paso del tiempo.
> Las bases de datos NoSQL aprovechan muy bien el Escalamiento horizontal: puedes armar un cluster de
> información en el que los datos se van a conectar entre si (varios nodos).

**Esto hace que los bases datos de datos NoSQL sea mas fácilmente escalable o replicable que una SQL.**

# ¿Qué son los documentos y colecciones? 

- **Documento:** Una forma de organizar y almacenar información con un conjunto de pares **clave-valor**
- - **SubDocumento:** Documento anidado en un documento para representar más información
```nosql
{
  name: "Sue",
  age: 26,
  status: "A",
  groups: ["news", "sports"],
  calification: {
    "math": 10,
    "cs": 9
  }
}
```
> Podemos tener documentos con campos compartidos pero podemos tener un documento que tenga un campo que los demás
> documentos no necesariamente tienen. Es decir, el documento es flexible. 

- **Colección**: Conjunto de documentos en una base de datos Nosql que usualmente tienen campos comnes entre sí. 

**Similitud entre Mongodb y SQL**

| MONGODB | SQL |
|---------|-----|
| Base de Data | Base de Datos |
| Colecciones | Tablas |
| Documentos | Filas (registros) |
|Campos | Columnas |

# Json vs. Bson
## JSON
**Ventajas de JSON:**
- Amigable
- Se puede leer
- Es un formato muy usado

**Desventajas de JSON:**
- Basado en texto
- Consume mucho espacio
- Es limitado: string, boolean, number, arrays

## BSON
**Ventajas de BSON:**
- Representación binaria de JSON
- No consume espacio
- Alto rendimiento
- Tipos de datos: +, date, raw binary, integer, long, float

**Desventajas de BSON:**
- No es estándar
- Es un formato para la máquina.

> Si quieres ver que tipos de datos extra ofrece mongo sobre Json. [Click aquí](https://www.mongodb.com/basics/bson)

# Insertando un documento
- Indicar que base de datos usarás. Si no existe, automáticamente se crea. 
```Bson
use("platzi_store")
```
- Insertar un documento. Si la colección no existe, atomáticamente se crea.
```Bson
db.products.insertOne({name: "Product 1", price: 1000})
```
```Bson
db.products.insertOne({_id: 1, name: "Product 1", price: 1000})
```
> Por defecto, mongo genera su propio id y lo indica con _id. De tal forma que si tú no lo indicas y ejectuas el mismo insert dos veces, los datos se
> repetirán al no tener una validación de por medio. En cambio, si tú indicas el _id y corres el mismo insert dos veces, te arrojará un error en el segundo insert por temás
> de duplicación. **Lo recomendable es dejar que mongo se encargue del _id.**


# Insertando varios documentos

### ! 
**Vaciar la base de datos completamente**
```Bson
use("platzi_store")
db.products.drop()
```

**Insertar varios documentos**
```Bson
use("platzi_store")
db.products.insertMany([
    {name: "Product 1", price: 100},
    {name: "Product 2", price: 1101},
    {name: "Product 3", price: 1011}]
)
```
> Para insertar varios documentos en una sola instrucción, es necesario insertarlo a modo de array y haciendo uso de la
> instrucción: insertMany()

**Nota:** Cuando insertas varios documentos y que usas la clace **_id**. Si hay error de duplicación, MongoDB
no va a insertar los siguientes documentos que vengan después del documento donde ocurrio el error. Sin emabrgo,
si inserta los documentos anteriores al error. 

Si únicamente quieres saltarte los errores, basta con añadir: `{ordered: false}` a la instrucción. Quedando de la siguiente manera:

```Bson
use("platzi_store")
db.products.insertMany([
    {name: "Product 1", price: 100},
    {name: "Product 2", price: 1101},
    {name: "Product 3", price: 1011}],
    {ordered: false}
)
```
# Listado de operadores de actualización:
- **$inc:** Incrementa el valor de un atributo numérico en una cantidad específica.
- **$mul:** Multiplica el valor de un atributo numérico por un factor específico.
- **$rename:** Cambia el nombre de un atributo.
- **$set:** Asigna un valor específico a un atributo.
- **$unset:** Elimina un atributo de un documento.
- **$min:** Actualiza el valor de un atributo con el valor mínimo especificado, sólo si el valor actual es mayor que el valor especificado.
- **$max:** Actualiza el valor de un atributo con el valor máximo especificado, sólo si el valor actual es menor que el valor especificado.
- **$currentDate:** Establece el valor de un atributo con la fecha y hora actual.
- **$addToSet:** Añade un valor a un atributo de tipo conjunto (array), sólo si el valor no existe en el conjunto.
- **$pop:** Elimina el primer o último elemento de un atributo de tipo conjunto (array). Si le pasas
como parámetro 1, tomará el último elemento, si le pasas -1, tomára el primer elemento.
- **$pull:** Elimina un valor específico de un atributo de tipo conjunto (array).
- **$push:** Añade un valor a un atributo de tipo conjunto (array).
- **$pullAll:** Elimina varios valores específicos de un atributo de tipo conjunto (array).
- **$in**: Coincide con cualquiera de los valores especificados en una matriz.

**Operadores de comparación**
- **$gt:** (greater than - >)
- **$gte**: (greater than or equal - >=)
- **$lt:** (less than - <)
- **$lte:** (less than or equal - <=)

# Actualizando un documento

Cuando se va actualizar un documento, debemos de identificar primero el documento mediante algún valor único.
El `_id` que genera mongo es un buen identificador por ejemplo. Un email podría ser otra opción. 

**Operador $set**: Actualiza el valor de un campo
```Bson
use("platzi_store")
db.products.updateOne(
    // query/identificador del documento
    {_id: ObjectId("6500e36680a1cce2f8358afa")},
    // operador -> Clace: nuevo valor
    {$set: {name: "Product 1.0"}})
```
Podemos no solo actualizar información, sino incluso añadir nueva información
```Bson
use("platzi_store")
db.products.updateOne(
    {_id: ObjectId("6500e36680a1cce2f8358afa")},
    {$set:
        {name: "Product 1.0", price: 3000, tags: ["A", "B", "C"]}
    }
)
```

**Operador $inc**: Incrementa el valor de  el valor de un campo. El campo debe de ser un numérico.
```Bson
use("platzi_store")
db.products.updateOne(
    {_id: ObjectId("6500e36680a1cce2f8358afa")},
    {$inc: {price: 3000}})
```
Si el documento, tenía en el campo `price` un valor de 1000. Al ejecutar la query anterior, el valor
del campo se actualizará a un valor de 4000. Justamente porque fue incrementado en 3000. 

# Actualizando varios documentos
### $inc
```Bson
use("sample_training")
db.products.updateMany(
    {city: "CLEVELAND"},
    {$inc: {pop: 1000}})
```
**Nota:** Toma en consideración que si el identificador coincide con varios documentos, a todos les va actualizar dicho valor. Por eso la instrucción es `Many`

### $set
```Bson
use("sample_training")
db.products.updateMany(
    {city: "CLEVELAND"},
    {$set: {myAttr: "Hola"}})
```
En este caso, a todos los documentos que cumplan con tener por valor `CLEVELAND` en el campo `city`. Se les añadirá el campo: `myAttr` con el valor `Hola`.

### $rename
Supongamos que nombraste mal el campo: `myAttr`. Que su nombre debía ser: `my_data`
```Bson
use("sample_training")
db.products.updateMany(
    {city: "CLEVELAND"},
    {$rename: {myAttr: "my_data"}})
```
Esto modificará únicamente el nombre del campo por `my_data`. Sin afectar su valor asociado. 

### $unset
En el caso en el que queremos eliminar un atributo. Se hace uso de: `$unset` de la siguiente manera: 
```Bson
use("sample_training")
db.products.updateMany(
    {city: "CLEVELAND"},
    {$unset: {my_data: ""}})
```
Dado que buscamos eliminar el atributo. No se le paso un valor, sino solo el nombre del campo. En este caso: `my_data`

# Array Update Operators
Los atributos usados anteriormente solo funcionan para datos especificos pero ¿cómo actualizamos datos que corresponden a un array?
```Bson
use("platzi_store")
db.inventory:find()
[
  {
    _id: 1,
    item: {name: 'item ab', code: '123', description: 'Single line description.'
    },
    qty: 15,
    tags: [ 'school', 'book', 'bag', 'headphone', 'appliance' ]
  },
  {
    _id: 2,
    item: {name: 'item cd', code: '123', description: 'First line\nSecond line'
    },
    qty: 20,
    tags: [ 'appliance', 'school', 'book' ]
  },
  {
    _id: 3,
    item: {name: 'item ij', code: '456', description: 'Many spaces before     line'
    },
    qty: 25,
    tags: [ 'school', 'book' ]
  },
  {
    _id: 4,
    item: {name: 'item xy', code: '456', description: 'Multiple\nline description'
    },
    qty: 30,
    tags: [ 'electronics', 'school' ]
  },
  {
    _id: 5,
    item: { name: 'item mn', code: '000' },
    qty: 20,
    tags: [ 'appliance', 'school' ]
  }
]
```

### $push
```Bson
db.inventory.updateOne({_id: 4}, {
    $push: {
        tags: "headphone"
    }
})

```
La instrucción anterior añade el elemento string: `headphone` al final del array cuyo nombre es `tags` en el documento 
con `_id` 4.

### $pull
Para quitar elementos de un array se hace de la siguiente manera: 
```Bson
db.inventory.updateOne({_id: 4}, {
    $pull: {
        tags: "headphone"
    }
})
```
Para aplicar la eliminación en todos, es muy similar. Basta con usar `updateMany()` y 
dejar la query vacía. Eso no aplicaría ningún filtro de tal forma que la operación se 
aplicaría a todos los documentos. 
```Bson
db.inventory.updateMany({}, {
    $pull: {
        tags: "book"
    }
})
```
¿Y cómo proceder si quiero eliminar dos elementos de los arreglos para todos los documentos? 
Podríamos ejecutar dos veces la instrucción intercambiando el valor pero no sería lo optimo.
Lo ideal es hacer uso de un operador interno: 
### $in
```Bson
db.inventory.updateMany({}, {
    $pull: {
        tags: {
            $in: ["appliance", "school"]
        }
    }
})
```

# Update or insert (upsert)
Supongamos que queremos realizar dos instrucciones a partir de una condición. 
Es decir, queremos insertar un documento en caso de que no exista, pero si ya existe,
queremos únicamente añadir datos a un campo. 

Podríamos realizar una especie de if haciendo uso de `insertOne` y `updateOne`, pero mongo nos da la posibilidad de hacerlo más optimo usando
`upsert`.

```Bson
use("platzi_store")
db.iot.updateOne({
    sensor: "A001",
    date: "2022-01-04",
}, {
    $push: {
        readings: 12434
    }
}, {
    upsert: true
})
```
Al marcar `upsert` como `true`. Mongo ejecuta la consulta y si ya hay un registro, lo actualiza, en caso de que no
haya ningún registro, lo añade. 

# Eliminando documentos

Para realizar la eliminación de un documento, es muy similar a actualizar o insertar. 
Se hace de la siguiente forma:

```Bson
use("platzi_store")
db.products.deleteOne({_id: ObjectId("6500e36680a1cce2f8358afc")})
```
Para eliminar varios documentos es de la siguiente forma:
```Bson
use("platzi_store")
db.products.deleteMany({price: 1101})
```
Se eliminan todos los productos que tengan por precio el valor de 1101.

```Bson
use("platzi_store")
db.products.deleteMany({name: {$in: ["Product 1.0", "Product 3"]}})
```
Se eliminan únicamente los documentos con nombres que esten dentro del arreglo.
```Bson
use("platzi_store")
db.products.drop()
```
Elimina toda la colección de productos. 

# Usando $eq y $ne

### $eq
Cuando haces uso del `find()` en mongo, implicitamente ya estas haciendo uso del operador `$eq`.
```Bson
use("platzi_store")
db.inventory.find({qty: 20})
// De manea explicíta sería:
db.inventory.find({qty: { $eq: 20} })
```
Ambas consultas retornan la misma información. 

**Para realizar consultas en subdocumentos** (documentos dentro de documentos) se hace
de la siguiente forma 
```Bson
use("platzi_store")
db.inventory.find({"item.name": "ab"})

// De forma explicita
db.inventory.find({"item.name": {$eq: "ab"}})

```
Cuando se accede a subdocumentos, es necesario que la clave vaya en encerrada con comillas. 

### $ne
Para el caso dónde queremos hacer uso de `$ne`. La única forma de usarlo es de manera explicita, siempre.
```Bson
use("platzi_store")
db.inventory.find({qty: {$ne: 20}})
```
Este tipo de operadores son de query, por lo que lo podemos utilizar en un update por ejemplo.
```Bson
use("platzi_store")
db.inventory.updateMany(
    { qty: {$ne: 20} },
    {
        $inc: {
            qty: 10
        }
    }
)
```
Todos los productos cuyo qty no sea igual a 20, serán incrementados en 10. 

# Usando $gt, $gte, $lt, $lte

- $gt (greater than - >)
- $gte (greater than or equal - >=)
- $lt (less than - <)
- $lte (less than or equal - <=)


La manera de usarlos es combinandolos con la instrucción `find()`. De la siguiente forma
```Bson
use("platzi_store")
db.inventory.find({ qty: { $gt: 25 } })
```
La consulta anterior me retornará todos los documentos tales que su valor para `qty` sea mayor a 25.
```Bson
use("platzi_store")
db.inventory.find({ qty: { $lt: 25 } })
```
Me retornará todos los documentos tales que su valor ``qty` sea menor a 25.
Si queremos realizar dos condiciones para acotar el resultado sería: 
```Bson
use("platzi_store")
db.inventory.find({ qty: { $gte: 40, $lte: 60 } })
```
La consulta anterior me retornaría solo los elementos cuyo valor de `qty` se encuentré entre 60 y 40, ambos incluidos.
```Bson
use("platzi_store")
db.inventory.find({ "item.name": { $eq: "item ij" }, qty: { $gte: 40, $lte: 60 } })
```
Lo anterior me retornaría solo aquellos documentos cuyo nombre sea `item ij` y además, se encuentre su valor de 
`qty` comprendido entre 40 y 60.

# Usando $regex

```Bson
use("platzi_store")
db.inventory.find({ "item.description": { $regex: /line/ } })
```
La expresión me traera todos los documentos que tengan la palabra `line` en `item.description`
```Bson
use("platzi_store")
db.inventory.find({ "item.description": { $regex: /^s/im } })
```
La expresión me retorna todos los registros que empiecen por la letra s, independientemente de si es mayúscula o minúscula, 
haciendo uso de `i`. Y `m` me garantiza que es multilínea. Así que no importa que línea sea en el texto. 


# Projection
Cuando quieres realizar una consulta en la que el resultado solo te devuelva el valor para ciertos campos, es ahí donde
entra el uso de Projection. Es como hacer un select con las columnas específicas
```Bson
use("platzi_store")
db.inventory.find({qty:{$gte:20}, "item.name": {$in: ["xy", "ij"]}}).projection({"item":true,"tags":true})
db.inventory.find({qty:{$gte:20}, "item.name": {$in: ["xy", "ij"]}}).projection({"item":1,"tags":1})
```
> Ambas consultas retornan lo mismo.

En la consulta anterior, se retornan todos los elementos en los que `qty` sea mayor o igual a 20 así como 
el nombre sea: `xy` o `ij`. Lo interesante es que solo se te retornarán los campos de `item` y `tags`.
- **No es posible intercalar true con false o 1 con 0. Todos son true o todos son false. Lo mismo si usas 1 o 0.**
- Si usas cero en la consulta anterior. Te devuelven todas los campos de los documentos, menos los que marcaste con cero.
- En el caso contrario, que marcaste como 1/true los campos. Solo esos son devueltos.
- **El _id** es el único campo que admite otro valor aún si los demás campos son todos cero o todos 1. 
