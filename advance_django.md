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
  

## Posible conexión entre componentes
  
  > Hace unos días me puse a pensar como se conectaban las cosas en Django y parece que me quedo más claro sobre dependiendo del 
  problema a resolver, que debo de buscar en la documentación. Tenemos las vistas, las urls, los modelos y los serializers. 
  
  Un **modelo** tiene asociado un **serializer** esto como una capa de validación antes de que los datos lleguen al modelo y se guarden
  pero también comom apoyo a la hora de servir los datos ya que puedes convertirlos a tipos de datos de python. Esto a su vez hace uso 
  de una **vista** para servirlos y en estas vistas tienes las acciones para determinar que operación HTTP se va a realizar y para 
  acceder a estas vistas tenemos a su vez lo que son las **urls** para servir los datos al usuario y acomodar los enlaces acorded a nuestra
  necesidad. En el caso de que lo que quieres es obtener datos del usuario, tenemos los **formularios** que son similares a los serializers. 
  
  Y todo, exceptuando las urls, se trata de programación orientada a objetos. Por lo tanto tenemos la clase de nuestros modelos, de nuestros
  serializers, de nuestras vistas y de nuestros formularios. 
  
  

  # ¿Qué es celery? 
  
  **Celery** es una biblioteca en Python para gestionar **colas de tareas distribuidas**, se enfoca en operaciones en **tiempo real**, también 
  soporta la calendarización de tareas.

  Es software libre y está liberado con una licencia BSD. Cuenta con con más de diez mil commits en este momento en Github.
  
  ## ¿Por qué es útil? 
  
  Piensa en todas las veces que has querido acceder a una API cada cierta hora o tal vez necesitas mandar una cierta cantidad
  de correos a una fecha especifica, esas largas o pequeñas tareas periódicas que tienes que realizar en la semana. Celery 
  te ayuda a hacerlo más fácil.
  
  También puede ser usada en esos largos tiempos que suelen tomar diferentes tareas y no quieres que el usuario espere ese periodo de tiempo.
  Si hay una tarea similar en tu aplicación, Celery puede ayudarte a acelerar ese tipo de procesos en segundo plano

  ## Ventajas
  
  - Escabilidad
  - Eficiencia
  - Orden de transacciones garantizado
  - Resistencia a fallos
  - Aguantar picos de mensajes
  
  **Flower** Es un admin en entorno gráfico para administrar las tareas de celery 
  
  # Pruebas unitarias
  
  **Tipos de pruebas que hay**
  - **Pruebas unitarias** (pruebas de integración): Pruebas que prueba módulos particulares, módulos qu epor si solos no reflejan una funcionalidad compleja 
  - **Pruebas de integración**: Módulos que se componen de múltiples partes, múltiples unidades
  
  > En desarrollo de software hay una técnica muy popular: **_TestDrivenDevelopment_** 
  > Es decir, el desarrollo va guíado por las pruebas. Creamos las pruebas primero y a partir de ahí desarrollamos lo demás.
  > Corremos las pruebas y vamos arreglando los fallos que vayan surgiendo 
  
  **Factory Boy**: Es una librería para _"feikear"_ datos y que se integra muy bien con Django 
 
# Admin actions: Modificar datos de un query 
  Son funcionalidades que nos permiten agregar cambios a un queryset de un conjunto de datos desde el admin de Django 

  > Por ejemplo si quisieramos hacer una acción que no es más que un update, vamos al archivo _admin.py_ y hacemos: 
  ```Python
  actions = ["my_action"]
  
  def my_action(self, request, queryset): 
    queryset.update(verified=Trye)
  my_action.short_description == "It's a test"
  ```
  Y con esto, en el admin ya nos aparecería nuestra acción 

  
  ## Extra para mi 
  
  - **¿Cuál es la diferencia entre Request y HttpRequest?**
  > Request es la clase que se encarga del parsing de las peticiones HTTP, es proveída por Django REST Framework y hereda de HttpRequest proveída por Django.
  Request por default, extiende de la clase HttpRequest
  
  - **¿Cuál es la diferencia entre request.data y request.query_params?**
  > request.data regresa el contenido “parseado” de la peticiones POST, PUT y PATCH. request.query_params es equivalente al anterior pero sólo de peticiones GET
  
  - **¿Cuándo es útil usar request.user y cuándo es útil usar request.auth?**
  > request.user regresa una instancia del modelo de usuario correspondiente al usuario que está haciendo la petición y request.auth contiene
  información adicional sobre el contexto de la autenticación
  
  - **La frase “Una twelve-factor app no hace distinciones entre local y producción cuando se trata acerca de ellos, una twelve-factor app
  realiza la conexión y desconexión de manera indiferente” ¿A qué principio se refiere?**
  > 4. Backing services
  
  - **Este principio habla acerca de como una app puede convertirse en el “backing service” de cualquier otra app.**
  > 7. Port binding 
  
  - **¿Cuál es la función de django-environ?**
  > Permite utilizar variables de entorno (inspiradas en 12factor) para configurar una aplicación de Django 
  
  - **Completa la oración: “A través del archivo local.yml podemos…”**
  > Definir el conjunto de servicios que conforman la aplicación de Django, así como la dependencia entre ellos y las formas en que se deben configurar
  
  - **Docker es utilizado durante el curso porque…** 
  > Nos permite apegarnos a los principios de una twelve-factor app al mismo tiempo que facilita el control y distribución de nuestro proyecto
  
  - **¿“Todas las aplicaciones de Django deberían usar la misma configuración que este proyecto” es una declaración falsa o verdadera? Justifica**
  > Falsa, la configuración actual es útil para nuestro caso particular y puede ser para la mayoría pero eventualmente cada proyecto tendrá
  necesidades diferentes
  
  - **Estás realizando la migración de datos de una plataforma como Firebase a una base de datos real usando Django. Has diseñado ya un esquema
  que puede representar los datos de manera correcta y te das cuenta que existen múltiples datos que te gustaría guardar por cada registro,
  datos como ID en Firebase, fecha de creación en Firebase y clase del Documento del que proviene. Usando herencia de clases,
  ¿de qué manera implementarías una solución para almacenar esos datos? Justifica**
  > Usaría herencia de modelos abstractos porque evitará que tenga que escribir esos datos en cada modelo de la aplicación.
  
  - **Tu aplicación realiza múltiples tareas de manera constante dependiendo el recurso que se esté accediendo, por ejemplo tareas como Administrador,
  tareas como Profesor, tareas como Político. Realmente los datos de cada uno de estos usuarios son exactamente los mismos y no existe diferencie
  dentro de la base de datos, todos viven bajo el esquema de “Humano”. Si quieres agrupar este comportamiento por “tipos de usuario”,
  ¿qué tipo de herencia de usuarios deberías ocupar? Justifica.**
  > Herencia con modelos proxy ya que únicamente estamos añadiendo funcionalidad a los mismos datos
  
  - **¿Qué tenemos que hacer para poder dividir nuestro modelo en múltiples archivos?**
  > Al igual que un módulo de Python, crear un folder models con un __init__.py que exponga los modelos de los archivos individuales.
  
  - **“Permite convertir tipos de datos complejos como querysets e instancias de clases a datos nativos de Python” describe mejor a:**
  > Serializers
  
  - **required, allow_null, source, initial y validators son atributos de la clase:**
  > Field
  
  - **Si queremos definir el comportamiento de una clase que herede de Serializer cuando se mande a llamar el método save() debemos:**
  > Sobreescribir el método create y/o update para controlar lo que sucede con los datos ya validados y los datos de retorno
  
  - **Un campo de un Serializer puede ser…**
  > Otro serializer
  
  - **Es el mecanismo por el cual se asocia una petición entrante a un conjunto de credenciales**
  > Autenticación 
  
  - **Quieres que los datos de tu aplicación puedan ser accesados por otras aplicaciones siempre y cuando el dueño de los datos haya autorizado su uso.
  ¿Qué tipo de autenticación será la más adecuada para este caso? Justifica**
  > OAuth porque permite delegar permisos a terceros sin tener que compartir las credenciales del usuario
  
  - **¿Qué desventajas tiene JWT?**
  > Una vez emitidos los tokens, se pierde control sobre su uso ya que no existe ningún registro local de ellos. Se pueden implementar estrategias de
  blacklisting pero pueden llegar a ser ineficientes o terminar persistiendo información sensible
  
  - **¿Por qué no se debe usar autenticación por medio de sesiones cuando se está creando un REST API?**
  > Sí se puede usar mientras que las sesiones no sean utilizadas como una fuente de almacenamiento de estados. 
  El objetivo de un REST API es permanecer stateless
  
  - **¿Qué ventaja tiene usar APIView sobre View cuando estamos construyendo las vistas basadas en clases de un API?**
  > APIView nos permite tratar las peticiones como instancias del la clase Request, aplicar las reglas de autenticación y permisos
  correspondientes, y puede transformar excepciones del tipo APIException en respuestas HTTP
  
  - **Este tipo de autenticación es el más apropiado para configuraciones del tipo cliente-servidor, tal como aplicaciones nativas
  de escritorio o aplicaciones móviles.**
  > Token Authentication 
  
  - **Compose y sus archivos .yml son...**
  > Es una declaración de todos los servicios que componen nuestro proyecto y declara que variables tiene que cargar, de que otros 
  servicios dependen, que volumenes debe de tener, etc. 
  
