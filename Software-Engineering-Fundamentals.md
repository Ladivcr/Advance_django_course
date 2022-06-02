# ¿Qué pasa cuándo escribes y envías un correo electronico?

- Escribimos el mail
- Presionampos _Enter_ para enviar el mail
- Al presionar _Enter_ estamos enviando una señal eléctrica desde el teclado
- Esta señal es enviada a la tarjeta madre (motherboard), esta la envia al CPU
- El CPU recibe la señal del teclado y la envia al SO
- El SO interpreta la señal eléctrica y la envía al navegador (El navegador utiliza tecnlogías web como: HTML, CSS y Javascript)
> La interpretación de la señal se da con ayuda de drivers, que es software dedicado a interpretar las señales eléctricas de los periféricos
> Estos drivers también ayudan a la hora de ubicar dónde es dónde apretamos el _Enter_. En este caso, en el navegador mientras escribimos un correo
- Nosotros cuando estamos en una pestaña de chrome en realidad estamos en un html, un html posee uno o varios script, y ahí un script que esta preparado para hacer algo al momento de pulsar la tecla enter (al momento que ocurra el evento “Pulsar tecla enter”), el cual va a hacer pues hemos apretado a tecla enter.
- Javascript entiende que al ocurrir el evento enter tiene que hacer algo con el mail que hemos escrito.
- AJAX permite enviar datos al servidor (el correo en este caso) y que la pagina no se recargue. AJAX es un API, que, entre sus multiples funciones,
encapsula los datos que deseamos enviar de una manera que luego el servidor comprendera. 
> La forma de encapsular los datos se denomina formato.
AJAX encapsula el mail en un formato llamado JSON
- AJAX envía el mail en formato JSON a través del protocolo REST (es un conjunto de reglas de como se envían los datos a un servidor)
a través de HTTP (esta incluido en REST).
> HTTP y HTTPS son protocolos de transferencia de texto. HTTPS es más seguro porque permite que solo al servidor al cual estamos enviando
los datos pueda interpretar la información, solo el receptor final podrá ver los datos que enviamos. De esta manera se evita que alguien se
pueda meter en el medio de al transferencia y ver los datos. Los datos se envían a una dominio DNS, que es la dirección de un servidor
- El servidor recibe los datos en forma de señales eléctricas, el SO a través de ethernet, transforma los datos que están encapsulados
según el protocolo TCP/IP. 
> Este protocolo luego crea los datos hacia el protocolo HTTP, HTTP es recibido por un servidor de HTTP de linux.
- El servidor HTTP ahora permite que los programas en el backend procesen la información recibida según corresponda.
Los datos procesados son guardados en una base de datos para luego poder acceder a estos datos.
- El correo ahora si es enviado al dominio que sigue al @.
- El correo ahora va al servidor de mail del dominio que se envía, este lo envía a la base de datos del mail que corresponde (el que esta previo al @),
es decir va a la bandeja del receptor.
- La bandeja del receptor recibe una notificación
- La bandeja envía una notificación a un servidor de notificaciones, el servidor de notificación avisa a nuestro celular que se ha recibido un mail.
- El mail fue envía y el receptor fue notificado a su celular.

> **EXTRA**
> La composición de una url grosso modo es la siguiente
> - https://gmail.com/envias_mail
> - protocolo/dominio/instrucción

> Los DNS son una base ed datos que relaciona el dominio con una IP única en Internet

> El proceso anterior fue descrito por _Carlos Adolfo Amarante_ - Platzi Student

# ¿Qué son los bits y bytes?

## Definiciones 

- **Electricidad**
 Es una forma de energía generada por el movimiento e interacción de los protones y electrones que conforman un átomo
 
 - **Sonido**
 En fisica es cualquier fenómeno que involucre la propagación de ondas mecánicas (sean oído o no), generalmente a
 través de un fluido
 (u otro medio elástico) que este generando por el movimiento vibratorio del cuerpo.
 
 - **Código Morse**
 Es un sistema de representación de letras y números mediante señas emitifas por tonos de forma intermitente
 
 - **Onda Digital**
 Es una onda electromagnética que tiene subidas y bajadas. Donde una subida es 1 y una bajada es 0
 
 - **Código Binario**
 El sistema de codificación usado para la representación de textos, o procesadores de instrucciones
 de computadora utiliza el sistema binario
 
 - **Sistema Binario**
 Es el sistema numérico de 2 cifras o **bit:** cero y uno. Se utiliza en computadoras debido a que internamente
 trabajan con dos niveles de voltaje
 
 - **Binary digit (Bit > b)**
 Es un digito del sistema numérico binario. Representa uno de estos dos valores: 1 y 0
 
 - **Byte (B)
Es la unidad de información de base utilizada en computación y telecomunicaciones que resultan 
equivalentes a un sistema de 8 bits

- **Central Processing Unit (CPU)**
Es el hardware dentro de dispositivos programables que interpreta y procesa señales
eléctricas y operaciones matemáticas (instrucciones)

- **Base numérica**
Es un sistema de númeración posicional, se llama base al número que define el orden de magnitud en que se ve incrementada 
cada una de las cifras sucesivas que componen un número

- **Sistema Hexadecimal**
Es un método de numeración posicional que utiliza como base el número 16, es decir, existen 16 símbolos posibles

- **Tabla ASCII (American Standard Code for Information Interchange)**
Es una tabla de bytes donde cada byte corresponde a un carácter, a una letra

- **Assembler** 
Son Bytes especiales de instrucciones del procesador

- **IP (Internet Protocol Address)**
Es una etiqueta numérica asignada a cada dispositivo conectado a la red informática que utiliza el protocolo de Internet
HTTP para la comunicación 

- **IPv4 (Internet Protocol Address version 4)**
Es la cuarta versión del IP. Usa direcciones de 32 bits. Limitadas a 2^32 = 3,294,967,296 direcciones únicas, 
muchas de las cuales están dedicadas a redes locales LAN. Sus direcciones utilizan la notación decimal punteada

- **IPV6 (Internet Protocol Address version 6)** 
Es la actualización de la cuarta versión dedl IP. Está diseñada para resolver el problema de agotamiento de direcciones. 
El tamaño de todas sus direcciones es de 128 bits ~ 340,282,366,920,938,463,463,374,607,431,758,211,456. La notación 
de sus direcciones es la del sistema hexadecimal

- **UTF-8 (8-bit Unicode Transformation Format)**
Es un formato de codificación de caracteres Unicode e ISO 10646 que utiliza símbolos de longitud variable. Utiliza de 1 a 4 
bytes por carácter Unicode 

- **Unicode**
Es la organización internacional de codificación de caracteres diseñado para facilitar el tratamiento informático,
transmisión y visualización de text de numerosos idiomas y disciplinas técnicas, además de textos clásicos y de lenguas
muertas. El nombre viene de Universalidad, Uniformidad y Unicidad.

 > La electricidad funciona con ondas
 
 > Si dicha onda se modula más grande o más baja y se conecta a una membrana que vibra al ritmo de 
 > la onda, se genera sonido

> Si mandas 3 ondas, una para cada color, y las conectas con rayos catódicos, se crea la TV y la transmisión 
> por vídeo

