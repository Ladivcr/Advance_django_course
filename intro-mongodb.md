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
- **$pop:** Elimina el primer o último elemento de un atributo de tipo conjunto (array).
- **$pull:** Elimina un valor específico de un atributo de tipo conjunto (array).
- **$push:** Añade un valor a un atributo de tipo conjunto (array).
- **$pullAll:** Elimina varios valores específicos de un atributo de tipo conjunto (array).

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
