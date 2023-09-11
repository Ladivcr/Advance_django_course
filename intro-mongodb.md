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

