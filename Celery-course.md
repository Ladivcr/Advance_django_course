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
