# ¿Qué es Bitcoin? 

Bitcoin es el proyecto que dio inicio a la revolución de las criptomonedas. Es una innovadora red de pagos de código abierto,
además de una nueva clase de dinero, conocida como criptomoneda. Esto, según lo estableció bitcoin.org, la organización más
importante detrás de este ecosistema.

Nació en 2009 con la publicación de su white paper, hecho por Satoshi Nakamoto, explicando su funcionamiento completo.

Bitcoin es la primera moneda digital descentralizada de la historia.

## Cualidades de Bitcoin
- Seguro: nos permite hacer transacciones de forma segura y a cualquier parte del mundo.
- Inmutable: la información registrada con sus operaciones no puede ser modificada.
- Transparente: La información registrada se puede consultar por todo el público.
- Anónimo: los datos personales están ocultos.
- Descentralizado: no está regulado por una institución o algún ente central, sino por los mismos participantes de la red.

## ¿Cómo funciona?

 Bitcoin está basado en la tecnología Blockchain: Es una base de datos distribuida en varios “nodos” de una red. 
 Conformada por bloques de datos algorítmicamente entrelazados. **Utiliza una prueba de trabajo (PoW), que es la búsqueda
 de un número o variable que permite que se puedan insertar bloques en blockchain. Requieren un nivel de cálculo y cómputo complejo.**

- Es una red de tipo P2P (Peer To Peer): está compuesta por nodos interconectados y descentralizados que permiten el intercambio de
 información directa de igual a igual.
- Su funcionamiento se basa en la criptografía: emplea técnicas algorítmicas en el cómputo para el resguardo de los datos y
 evitar su acceso por personas sin autorización. Las llaves públicas y privadas involucradas en Bitcoin hacen uso de esta tecnología.
 
> Aporte creado por: Luis Enrique Herrera.

# Funcionamiento de blockchain

## Los bloques como estructura principal 

Blockchain (del inglés cadena de bloques) se constituye por bloques que contienen todas las transacciones que
se realizan en el sistema. Estos contienen datos especiales, además que permiten que se identifiquen como
únicos (hash), y se encuentran en el encabezado de cada bloque.

A través de estos datos, los bloques se entrelazan, ya que cada bloque al contener el hash del bloque anterior 
(y así hasta el bloque inicial). Se puede comprobar si las transacciones que han sido registradas son las
correspondientes de acuerdo a los valores de comparación (incluyendo las marcas de tiempo). La analogía
para comprenderlo mejor, podemos compararla con huellas digitales.

Si se pretendiera modificar algún bloque, se tendrían que modificar todos los bloques posteriores. Se tendría
que hacer de tal forma que los participantes de la red no se percaten del cambio efectuado, lo cual
es prácticamente imposible, pues la inserción de nuevos bloques ocurre más rápido de lo que
cualquier persona pudiera siquiera intentarlo.

Así, entre más bloques haya después de determinado bloque, más segura es su posición en la cadena.

## Hash y Proof-of-work

El cálculo para los hashes necesita mucho poder de cómputo, pues las máquinas a cargo están tratando de encontrar 
al azar un número que debe cumplir ciertas condiciones, las cuales establece el sistema en sí. Es por eso que 
nadie puede decidir qué número debe ser.

Al pasar los diez minutos desde el último bloque, el primero que lo haya encontrado, es quien puede insertar la 
versión de su bloque. Esta tarea por supuesto debe ser remunerada, y la recompensa se da en bitcoins. Esto se 
define como Proof-of-work.

La dificultad del minado aumenta progresivamente, y también interviene el halving, que es la división a la 
mitad de la recompensa cada cierto número de bloques.

Con la ayuda del cifrado criptográfico, se ha podido inventar un sistema que es simple y muy complejo a la vez, 
algo que para los usuarios normales se podría convertir en algo natural, y que de a poco se está estableciendo 
dentro de la vida cotidiana más y más. El papel de los mineros es esencial, y mientras haya gente dispuesta a 
hacer la labor, Bitcoin seguirá creciendo.

> Aporte creado por: Luis Enrique Herrera.

# El rol de quienes minan Bitcoin

Mineros son aquellas personas que entregan el poder de cómputo de sus equipos para asegurarse de que los bloques de la 
cadena de BlockChain sean agregados correctamente. Esta ejecución es lo que se conoce como Proof-of-work, que se traduce
en la resolución de complejos algoritmos para el funcionamiento descentralizado y seguro de Bitcoin a partir de poder
de cómputo. Este protocolo también ha sido implementado en otras criptomonedas.

## Función de los mineros
La función de los mineros de Bitcoin se extiende a tres tareas:

- Se encargan de comprobar que las transacciones sean realizadas debidamente
- Certificar que nadie pueda usar la misma moneda dos veces o introducir monedas falsas
- Crear nuevos bitcoins con la inserción de nuevos bloques
## Recompensas del minero
 
 Se dividen en dos:

- Al resolver el hash de un bloque nuevo: Se ganan cierta cantidad de bitcoins, reduciéndose a la mitad cada 210,000 
bloques para aumentar la dificultad de minado, y por consecuencia, la demanda del bitcoin. Solo podrán minarse 21 millones de bitcoins en total en el sistema. Alternativamente, se puede participar en el minado entrando a un pool de minado, donde varias personas unen poder de cómputo en una red y entre todos ganan una porción proporcional.

- Al validar transacciones con rapidez que se incluyen en los bloques: Se tratan de comisiones por transacciones. Cada vez se está volviendo una prioridad más grande debido al crecimiento de la red, evitando la posibilidad de ataques.
Cuando se creen el total de Bitcoins, será cuando finalmente sea un sistema totalmente consolidado, y cuando se sepa el valor final de Bitcoin.

> Aporte creado por: Luis Enrique Herrera.

# Lightning Network 

Desde el inicio, Bitcoin ha estado limitado a ciertas dificultades para poder progresar al nivel que Satoshi lo 
propuso en su white paper. El primer problema ha sido la escalabilidad, que se traduce en la falta de rapidez y 
volumen en su red para poder relizar transacciones más eficaces. En su núcleo, Bitcoin soporta solo 2,048 
transacciones por bloque, alrededor de 7 transacciones por segundo.

Debido a esto, el tráfico y las comisiones por transacción suben. En algún momento se llegaron a superar los 50 
dólares por transacción.

Para ello, surge una propuesta complementaria llamada Lightning Network. Es un software independiente que se 
comunica con la red de Bitcoin, que permite transacciones desde montos bajos, instantáneas y con comisiones muy 
bajas. Aunque esta propuesta aún se encuentra en una etapa temprana y con sus propias desventajas.

## Lightning Network

- Transacciones instantáneas
- Comisiones realmente bajas
- Software independiente, que requiere de comunicación con la blockchain de Bitcoin
- LN puede integrarse en otras redes
### ¿Por qué usar LN?

- Escalabilidad
- Micropagos
- Privacidad
- Pagos instantáneos
- Responder

Actualmente, se siguen desarrollando más herramientas usando Lightning Network para mejorar y ampliar el 
proyecto, que definitivamente lograrán una evolución para Bitcoin.

> Aporte creado por: Luis Enrique Herrera.

# Pilares de Bitcoin

Veamos un poco más a profundidad lo que Bitcoin representa a un nivel ideal para el sistema financiero:

## Las virtudes Satoshi

- Abierto: Significa que Bitcoin es accesible para cualquier persona, no solo para el usuario regular, sino 
también para aquellos que deseen contribuir con desarrollos y proyectos que aumenten su valor, pues al ser una 
solución de código abierto, cualquiera que tenga las habilidades técnicas es libre de poder crear nuevas 
alternativas. Sencillamente, aún hay mucho que hacer por Bitcoin.
- Escaso: Hay un límite de bitcoins por generar, y esto a su vez se volverá más complejo. A comparación del 
sistema FIAT, que permite una impresión artificial de valor, lo cual está llevando a una inestabilidad 
insostenible. Bitcoin es un ecosistema basado en valor real, por las propias personas y sus cualidades 
tecnológicas.
- Público: La información y sus detalles dentro de Bitcoin es totalmente accesible a quien desee saber más sobre 
prácticamente cualquier cosa que se pueda pensar respecto a la cadena de bloques.
- Sin fronteras: No hay un límite para su acceso a nadie mientras se tenga una conexión a internet.
- Resistente a la censura: A pesar del intento de muchos, Bitcoin ha podido sobrellevar los ataques y las 
regulaciones para poder controlarlo o manipularlo.
- Descentralizado: Su control depende de todos y no recae en un ente central.
- Confianble: Su valor procede de los usuarios que han depositado su confianza por el potencial a largo plazo. No 
olvidemos que nosotros como mayoría podemos darle poder a todo lo que nos propongamos, y Bitcoin representa la 
oportunidad de recuperar algo que nunca debimos ceder.

> Aporte creado por: Luis Enrique Herrera.

# Blockchain más allá de Bitcoin 

## Tipos de Blockchain 
- Públicas: Accesible a cualquier persona del mundo (Bitcoin, Ethereum, etc) 
- Privadas: Válidas para solventar problemas de eficiencia, seguridad y fraude dentro de instituciones financieras tradicionales (Hyperledger, etc)
- Híbridas: Intento de aprovechar lo mejor de ambos mundos. La participación en la red es privada pero la 
contabilidad es accesible de forma púbblica (R3, Energy Web, etc)

No olvidemos las características de esta tecnología, las que permiten que Bitcoin sea algo extraordinario.
La inmutabilidad, la transparencia y la trazabilidad.

Con esto, es claro que podemos crear innovaciones que aprovechen estas cosas, y las opciones son prácticamente infinitas.
Desde ámbitos que han tenido poca evolución tecnológica hasta las mejoras dentro de tecnologías ya conocidas, pero que 
incluso puedan renovarse radicalmente.

Imaginemos un mundo donde, con el apoyo que Bitcoin puede brindar, conformemos nuevos sistemas de educación, de salud, de 
cadenas de suministro, de investigación científica, y la lista sigue y sigue.

Esto no está limitado a los sectores públicos. Podemos imaginar casos de uso privados, que puedan confiar en esta 
tecnología para poder proteger sus datos de agentes externos, pero manteniendo una transparencia hacia las personas que les 
compete.

Realmente habría que ahondar y experimentar el cambio de paradigma que surgiría si nos acostumbramos a estas nuevas ofertas 
y soluciones.

## Evolución de Blockchain
- Blockchain 1.0: Digital currency
- Blockchain 2.0: Smart contracts
- Blockchain 3.0: dApps
- Blockchain 4.0: Industry

# Blockchain 1.0: Digital Currency

Con el nacimiento de Bitcoin, surgió la primera edad de Blockchain. Esta tomó conceptos ya hechos en la era “cypherpunk”, 
desde los años 80´s. Pero no fue sino hasta que se dió a conocer el white paper que el significado de las “monedas 
digitales” tomó un verdadero sentido.

Conceptos como DLT y P2P habían dejado ya su marca en la Internet. La implementación de una tecnología de registro 
distribuido (DLT), ya ha sido aplicada en propuestas que han tenido cierta reputación con la popularización de este tipo de 
arquitecturas de red y sus ventajas.

Casos como el de Napster es de los más conocidos y además pionero en esta tendencia: una plataforma de distribución de 
música en formato MP3 con auge en la primera década de este siglo.

Blockchain es el resultado de estas invenciones junto con otro protocolo muy importante: PoW (Proof Of Work). A partir de 
aquí, se empieza a construir la gran cadena de transacciones que ya hemos tratado. Con ella, también empezaron a crecer 
nuevas capas que han llevado a Blockchain a una evolución que todavía sigue en sus primeras etapas, pero que sin duda han 
sido un gran salto.

> Aporte creado por: Luis Enrique Herrera.

# Blockchain 2.0: Smart Contracts

Una nueva forma de intercambiar valor
En esta etapa, ya no solamente se empezó a transaccionar con “monedas digitales”, sino que se desarrolló toda una 
funcionalidad para integrar otro tipo de activos, a través de la creación de contratos inteligentes. **Estos en realidad 
son formatos de código para realizar transacciones de una manera programada, facilitando el intercambio de valor más allá 
de las criptomonedas.**

Así, los contratos inteligentes o smart contracts son utilizados como un mecanismo de seguridad para transaccionar 
diferentes bienes tangibles y no tangibles. Nacen con Ethereum, la iniciativa de Vitálik Buterin, un programador ruso que 
creó la Ethereum Virtual Machine (EVM), para el despliegue de estos contratos con ayuda de su propio lenguaje de 
programación.

Dentro de la EVM, es posible generar contratos que creen “tokens”, un recurso que representa valor parecido a una moneda o 
propiedad digital, con sus especificaciones, pudiendo originar diferentes servicios a partir de la blockchain de Ethereum. 
En esencia, es una plataforma que pretende llevar esta tecnología a una escala mayor con su propuesta un tanto más completa 
y atractiva.

Por supuesto, se puede imaginar una integración de este tipo de software para optimizar áreas como lo legal, lo mercantil, 
y así erradicar casi por completo el margen de error humano inherente en la mayoría de las actividades. Es ideal imaginar 
que se concreten corporaciones, instituciones y sistemas de una manera más eficiente y que sin duda tendrían un mejor 
impacto en la sociedad.

> Aporte creado por: Luis Enrique Herrera.

# Blockchain 3.0: DApps

Se introdujo para abordar problemas como: 
- Escalabilidad
- Sostenibilidad
- Seguridad
- Costo
- Dilemas de interoperabilidad

> Redes blockchain programables, capaces de soportar aplicaciones descentralizadas, con mucha mayor capacidad que Bitcoin y Ethereum 

## Tecnologías 
Escalables, con una interfaz amigable para los usuarios y eficientes 

- Proof of Stake (PoS), Proof of History (PoH), etc. 
- DApps (IPFS)

## Objetivos 
- Ejecuta de forma automática acciones programadas en blockchain 
- Registro y transferencia de valor más allá del dinero 
- Autonomía, nuevos modelos de negocio, anonimato 
- Escalabilidad 


En la historia de Bitcoin y Blockchain, llegamos a un punto en donde todo lo que se ha visto sobre Bitcoin se relaciona a 
algo muy curioso: las aplicaciones o apps. ¿Cambiaría algo de nuestras queridas aplicaciones?

En realidad, sí. Pero nada que no nos gustaría. Ahora conoceremos las Distributed Apps (dApps).

## ¿Qué son las dApps?

Actualmente, las aplicaciones más usadas y de las que muchos de nosotros dependemos en nuestro día a día, pertenecen a 
empresas de las que no podemos decidir absolutamente nada. Hasta cierto punto, tiene sentido, pues al ser corporaciones 
privadas, deberían ser libres de decidir sobre su empresa, ¿cierto?

Pero… ¿Qué pasa cuando lo que manejan son datos personales y hacen uso de ellos?

Tomando en cuenta esto y muchos otros casos en los que sería mejor si las manejáramos de forma descentralizada (como las 
finanzas), es como surgieron las dApps. Son aplicaciones cuyo control no está bajo un solo eje o servidor, sino que es 
administrada por una red blockchain que almacena, distribuye y asegura nuestra información.

En términos prácticos, la usabilidad sería la misma, solamente que adquiriendo la seguridad y la confianza de una 
tecnología que nos devuelve el control de nuestros datos. Por supuesto, conlleva tomar nuevas responsabilidades e incluso 
adaptarse a algunos procedimientos nuevos, aunque nada más son pasos sencillos a seguir para poder obtener un mayor 
beneficio.

Hasta ahora, lo cierto es que este tipo de aplicaciones todavía no tiene suficiente atención como para considerarlas 
consolidadas, pero depende de las personas y las propuestas, la rapidez con la que adoptemos estas soluciones, que prometen 
un crecimiento equitativo para las industrias y el mundo de las finanzas.

> Aporte creado por: Luis Enrique Herrera.

# Conceptos

- Blockchain: Es una base de datos distribuida en varios nodos de una red. Cadena de bloques de información.
- Prueba de Trabajo: Búsqueda de un número o variable que permite que se puedan insertar bloques en blockchain y además requieren un nivel de cálculo y cómputo complejo.
- (Adam Back) HashCash el ancestro de PoW: Nació para evitar spam. Funciona para no poder utilizar un bitcoin dos veces.
- P2P: Ordenadores conectados entre sí y permiten el intercambio directo de información de igual a igual. Servidores descentralizados.
- Criptografía: Tecnologia para resguardar la integridad de los datos y así evitar que personas no autorizadas accedan a la información.
- DLT: Tecnologías de registro distribuido
- PoW (Proof of Work): Este protocolo funciona bajo el concepto de requerir un trabajo al cliente, que luego es verificado por la red. Normalmente el trabajo solicitado, consiste en realizar complejas operaciones de cómputo.
