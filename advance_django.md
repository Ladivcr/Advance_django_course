# Curso Avanzado de Django 

Un **Backend developer** es un diseñador, **su trabajo consiste un 90% en leer**, diseñar, analizar y planear. Un 10% en programar.
Nuestro trabajo más importante es el diseño del sistema y las decisiones tomadas son más costosas y más difíciles de cambiar.

- Web Services es la manera en que se implementan las arquitecturas orientadas a servicios, se crean bloques que son accesibles a través de la web, son independientes del lenguaje de programación.

- **SOAP:** Tiene su propio estándar, conocido por utilizar XML.
- **REST:** Representational State Transfer, el objetivo es que nuestras operaciones sean Stateless. REST depende mucho más del protocolo HTTP.
- **GraphQL:** Es el más moderno, desarrollado por Facebook. Funciona más como un Query Language para las API, un lenguaje de consultas.

# Arquitectura

- Monolítica: Todo esta manejado por el mismo servidor y todo esta altamente acomplado. Si mueves algo, puede afectar
- Distribuida: Lo contrario a Monolítica
- Híbrida: O el backend hace todo el renderinc o el frontend lo hace por si mismo con otras herramientas
- SOA, arquitectura orientada a servicios:
> - Es autocontenida
> - es una caja negra para sus consumidores
> - representa una actividad de negocio con un fin especifica

# Web services, estandares
- SOAP 
- RESTful HTTP
- GraphQL

# The Twelve-Factor App

## Principios

- Formas declarativas de configuración 
> Minimizar el costo y tiempo de desarrollo que toma para que un developer empiecé a trabajar en el proyecto
- Un contrato claro con el OS
> Ofrecer máxima portabilidad y los proyectos entre entornos sean muy similares 
- Listas para lanzar
> Las apps deben de estar listas para lanzar en cualquier momento
- Minimizar la diferencia entre entornos
> Nos permitirá generar un pipeline de CD
- Fácil de escalar
> Cuando la app se ve en la necesidad de servir a más usuarios

- 1. **Codebase:** Sólo una fuente que almacene el código
- 2. **Dependencias:** Declara explicitamente que dependencias usará el proyecto y ninguna dependencia se debe filtrar
- 3. **Configuración:** Almacena la configuración en el entorno 
- 4. **Backing services:** Trata los "backing services" como recursos conectables
> Backing services:** Es cualquier servicio que puede consumir mediante la red. O sea que cuando haces deploy de una app, debe ser sencillo cambiar de la base de development a una en aws por ejemplo (recursos conectables)
- 5. **Build, release run:** Separa ESTRICTAMENTE las etapas de construcción y las de ejecución 
- 6. **Procesos:** Ejecuta la app como una o más procesos sin estado 
- 7. **Port Binding:** La Twelve-Factor app es completamente autónoma, cuando el usuario se conecta a la app via hostname, una capa de enroutamiento se encarga de conectar al puerto conveniente para mirar el contenido de la app, lo que un developer ve como `http://localhost:5000/`, el usuario lo ve como `web-app.com`
> Aporte de Manuel Alejandro Aguilar Téllez Girón - Student platzi 
- 8. **Concurrency:** El developer debe de ser capaz de arquitectar la app de tal forma que se maneje cada proceso como un trabajo por separado. Esto permitirá a la app la escalabilidad horizontal
- 9. **Disposability:** Los procesos son desechables, es decir, se debe de parar en cuanto se ordene. Esto facilita el escalamiento.
- 10. **Dev/prod parity:** Reducir la diferencia entre entornos. Para reducir tiempo entre deploys. 
- 11. **Logs:** Una twelve-factor app no se debe de preocupar por dónde manda estos logs o dónde los va a guardar, simplemente los refleja en la `stdout` del 
dispositivo del developer para que este lo analice cuando sea conveniente
- 12. **Admin processes:** Tratar los procesos administrativos como cosas completamente diferentes, no deben y no tienen que estar con la app. (back ups, limpiar datos, etc).

# Algunos comandos para el curso 

- docker-compose -f local.yml build
> Toma nuestro archivo local.yml y construye las imagenes que necesitaremos para el desarrollo.
- docker-compose -f local.yml up 
> Para correr el stack de desarrollo: Va a crear la red, los volumenes y va a levantar nuestros servicios.  
- docker-compose -f local.yml ps
> Para ver que imagenes estan corriendo 
- docker-compose -f local.yml down 
> Mata los servicios, los detiene

**Para evitar escribir todo el tiempo: docker-compose -f local |algo|**
podemos hacer: **export COMPOSE_FILE=local.yml**
esto lo que hace es crear la variable de entorno _COMPOSE_FILE_
y docker-compose la detectará automáticamente.

# Comando administrativos 

- docker-compose run --rm django _COMMAND_
- docker-compose run --rm django \ python manage.py createsuperuser
> La flag --rm lo que hace es que cuando se termine de ejecutar nuestro comando lo que va a hacer es matar nuestro contenedor. 

# Habilitar debugger

- 1. docker-compose up: levantamos todos los servicios
- 2. docker-compose ps: vemos cual corresponde a django
- 3. docker rm -f <ID>: matamos a django
- 4. docker-compose run --rm --service-ports django: lo corremos a parte de tal manera que nos permita interactuar con ellos
  
 # Proxi models
  Nos permiten extender la funcionalidad de un modelo sin crear una nueva tabla en la base de datos
  
[Tipos de herencia en django](https://coffeebytes.dev/herencia-en-modelos-de-django/)
  
# Vistas en DRF
  
- **ViewSet:** Cuando usamos la mayoria de operaciones CRUD en un modelo
  > Create, Read, Update and Delete

- **Generics:** Cuando solo desee permitir algunas operaciones en un modelo

- **ApiView:** Cuando desee personalizar completamente las operaciones de un modelo.

 
