# Celery ¿Qué es, para qué sirve, cómo se usa? 

Celery es una biblioteca en Python para gestionar colas de tareas distribuidas. Es software libre y está liberado con una licencia BSD.
Cuenta con con más de diez mil commits en este momento en Github.

No es la única. Tiene ciertos equivalentes en otros lenguajes, pero no hay ninguna que sea igual

**Ventajas**
- Escabilidad
- Eficiencia
- Orden de transacciones garantizado
- Resistencia a fallos
- Aguantar picos de mensajes

**Sirve para**
- Dividir el Backed de una aplicación en receptor y realizadores de tareas
- Uniformizar la respuestas del backend
- Crear arquitecturas de microservicios

## ¿Cómo se usa? 

- Python, Celery y dependencias
- Servicios de cola de tareas
- Almacenamiento (opcionalmente) 
- Diseñando aplicaciones específicas

# Brokers de tareas: Servidores de mensajería y formas de usarlos

Las colas de tareas, brokers de tareas o brokers de mensajes son servicios de mensajería que actúan como intermediarios.
> Los brokers enrutan agregan y permiten crear servicios publicacón/suscripción (pubsub)

- **enrutar:** Se recibe el mensaje, el mesnaje tiene metadas y esos metadatos le permiten al broker de tarea encaminarlo a un lugar u otro. 

**Algunos brokers de tareas**

| Servicio | Lenguaje |
| --- | --- | 
| RabbitMQ | Erlang |
| Kafka | Scala y Java |
| Redis | C |
| ActiveMQ | Java |

## Brokers de mensajería privativo 

Sistemas de mensajería privativos de proovedores de nube: AWS SQS, Azure Service Bus, Google Cloud Messaging, Firebase Cloud Messaging

**Los brokers son fundamentales en infraestructuras actuales**

## Usos y ventajas

- Sincronización de datos entre diferentes partes de un sistema
- Eliminación del almacenamiento central de datos
- Activación segura de microservicios
- Almacenamiento persistente de datos
- Redundancia

## Imprescindible en arquitecturas modernas 

| Arquitecturas dirigidas por eventos | Arquitecturas en streaming |
| --- | --- |
| Los brokers actúan como mediadores de eventos | Lambda, Kappa |

- Arquitecturas dirigidas por eventos: Son arquitecturas que no están dirigidas por peticiones sino por eventos.
Van recibiendo eventos y esos eventos se van procesando de manera reactiva
- Arquitecturas en streaming: Piensan en los datos más que en evento, se van recbiendo en un canal y se van 
procesando todo el tiempo. Ejemplos de ello son las arquitecturas: Lambda y Kappa

> Sal del monolito con arquitectura basadas en eventos.

# ¿Cuándo debemos usar Celery? 

Cuando vayas a escribir una arquitectura basada en Python, cuando trabajes con Django, Flask o una aplicación
de Ciencia de Datos con Panda o Scikit puedes usar Celery porque es la única herramienta que nos ofrece estas posibilidades.

Arquitecturas basadas en PaaS como Heroku, independientes del servicio cloud o que permitan el uso de servicios Open Source. 


**Celery en Producción:**

- Registro y almacenamiento (sin repuesta al origen, un log por ejemplo)
- Intermediar entre servicio web (Flask, Django) y otros microservicios
- Ejecución retrasadas de tareas

**Celery frente a otras alternativas:**

- Modelo genérico y abstracto(frente a Pika, Django-carrot)
- Más usada que Dramatiq.
- Soporte para más brokers y más configurables que RQ
- Más configurable que Huey

Celery es única en su género y su uso es aconsejable casi siempre.

Si tu aplicación no es muy compleja y únicamente quieres el paso de mensajes.
Para casos simples, **Huey** o **Pika** pueden ser alternativas excelentes. 

# Casos de uso actuales

- [CKAN](https://ckan.org/), el almacén para datos abiertos, lo usan para ejecutar tareas y procesar webhooks 
- Airflow es un sistema de flujos de trabajo, que usa Celery para mensajería
- Uso con Django 

# ¿Cómo funciona un bot? 

Un bot es un programa que actúa como interlocutor en un software de mensajería, es una nueva interfaz de usuario, es una nueva forma de interacción.
El software debe estar preparado para reaccionar a una orden y dar una respuesta inmediata.

Un Bot siempre está escuchando sin perder ningún mensaje, responde lo que necesitas y realiza tareas.

## **Casos de uso:**

- Atención inmediata al cliente
- Solicitudes de información de búsquedas
- Comprobaciones de identidad y de seguridad
- Información de otro lugar y alertas
- Juegos

## ¿Cómo lo hacen? 

- A través de una API provista por la aplicación 
- Usando bibliotecas que abstraen esa API
- Con un backend que procesa las peticiones y responde a las mismas
- O interactuan con el usuario

# ¿Qué es un broker de mensajería?

Imaginemos una cola de mensajareía: 

| 0 | 1 | 2 | 3 |
| --- | --- | --- | --- |

Donde esta cola tiene una seríe de clientes que emiten mensaje, cada mensaje se va a ir 
colocando por orden, cada uno en su cailla. El broker de mensajería se asegurara que los 
mensajes lleguen a su destino. Esos mensajes lo que tienen son una seríe de clientes que van 
a irse leyendo como se van colocando en la cola. 

Estos mensajes se leen una vez, se lee el mensaje, se destruye y se pasa al siguiente mensaje. 

**Cosas que puede hacer el broker de mensajería**
- Se asegura que el mensaje siempre se reciba
- Establece mecanismos (un timeout por ejemplo) en el cual si no se ha recibido el mensaje, lo vuelve a enviar
- Asignar prioridades

# Conceptos: mecanismos de publicación/sucripción. Canales. Intercambiadores

En el mundo de los brokers de mensajería se utilizan principalmente dos tipos de metáforas. Unas vienen del mundo del correo,
donde hay mensajes que tienen un emisor y un receptor, como una carta. Pero no todos los mensajes son de este tipo: hay mensajes que
se emiten y puede recibir mucha gente: usamos en este caso metáforas del mundo de la radio.

En la radio tenemos un emisor que es el que emite el mensaje. Ese mensaje se retransmite, es decir, se hace un broadcast, de forma que
todo el mundo puede recibirlo. En este caso no importa demasiado que quien escuche acuse recibo del mensaje, simplemente que haya un
mecanismo eficiente que permita hacer llegar, a todos los que lo deseen, el mensaje que se emita.

## ¿Quién recibe ese mensaje? 

En el mundo de la radio, diferentes canales tienen diferente programación, y los oyentes seleccionan un canal para escuchar.
En el mundo de los brokers de mensajería, los canales permiten concentrar los mensajes y que no se mezclen los relativos a
diferentes tareas o partes de la aplicación, y adicionalmente los canales pueden tener suscriptores que serán los que únicamente
reciban un mensaje que se envíe a este canal.

A este mecanismo se le denomina también pub/sub, o publicación/suscripción. Cuando el emisor publica, lo hace en un canal.
Los posibles receptores son suscriptores del canal y simplemente tienen que indicar el canal al que quieren escuchar para ser
alertados y funcionar de forma reactiva cada vez que un nuevo mensaje se emita en el canal.


## Las estafetas

Las **estafetas, intercambiadores o exchanges** permiten regular este tráfico de publicación y suscripción y asignar a diferentes canales dependiendo de una serie de reglas.
Los intercambiadores son fundamentales y le añaden flexibilidad a este tipo de sistemas, permitiendo el envío programable de mensajes dependiendo en metadatos de los mismos
o incluso en su contenido.

La mayor parte de los brokers de mensajería pueden trabajar de las dos formas.
Los brokers siguen protocolos tales como AMQP (Advanced Queue Messaging Protocol) que permite trabajar como correos y emisora de radio.
AMQP se implementa en diferentes brokers de mensajería tales como RabbitMQ o ActiveMQ.

Otros protocolos se centran sólo en una parte de este mundo de la mensajería: MQTT, Message Queuing Telemetry Transport
es un protocolo pub/sub, de publicación y suscripción.

## Las colas de tareas

Por la variedad de protocolos y diferencia de implementaciones, muchas veces lo que se busca por parte del desarrollador es una biblioteca
de alto nivel que abstraiga esto y permita trabajar con conceptos que estén en el dominio del problema.
Celery, por ejemplo, usa principalmente el concepto de cola de tareas.
Esto permite al usuario diseñar la aplicación en función de qué tareas
se quiere que se ejecuten y de qué forma (con qué periodicidad, con qué prioridad)
se van a ejecutar.

A la vez, Celery tiene acceso a los mecanismos básicos (intercambiadores, colas de mensajes),
que se pueden programar de la forma que desee. Partiendo de una aplicación básica, 
Celery te permite crecer hasta hacer una verdadera aplicación avanzada de cómputo distribuido.


# Brokers de mensajería open source 

**RabbitMQ:** Cola de tareas distribuida y robusta.
**ActiveMQ/Apollo:** Cola de mensajes de altas prestaciones con soporte de JMS.
**RocketMQ:** Message-oriented middleware con MQTT y JMS
**Apache Kafka:** Sistema orientado a procesamiento de streams en tiempo real.
**NATS:** Sistema de mensajería distribuido.
**RabbitMQ:** Es el más popular y el que tiene más soporte de bibliotecas. Es relativamente simple de instalar y mantener, tiene una buena comunidad para soportarlo.

Características comunes:

- Protocolos de mensajerías usados.
- Soporte de estándares de mensajería, cómo se envían, reciben y procesan los mensajes.
- Licencias libres.
- API REST, a parte de usarlos con una librería puedes trabajar con ellos con un simple API.
- Soporte Activo.

# Python con RabbitMQ uso básico de la terminal 

- Crear un host virtual en Rabbit
``sudo rabbitmqctl add_vhost <nombre_vhost>``

- Crear un usuario en Rabbit para que use el vhost
``sudo rabbitmqctl add_user <nombre de usuario> <password usuario>``

- Asignar permisos al usuario en el host virtual
``sudo rabbitmqctl set_permissions -p <nombre vhost> <nombre de usuario> ".*" ".*" ".*"``
