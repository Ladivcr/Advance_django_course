# ¿Qué es networking & CDN en AWS? 

AWS contiene muchos servicios. Entre ellos, tenemos funciones
de optimización al nivel de red, ya sea para hacer más eficiente
el distribuir contenido o hacer más seguro tus servicios publicados 
en la nube de amazon. 

### **Componentes de AWS Networking & CDN**
- **VPC:** Red privada virtual en AWS
- **CloudFront:** Acelerador de entrega de contenido web.
- **Route 53:** Servidor de nombres (DNS) en AWS.
- **API Gateway:** Una dirección pública que conecta con el servicio backend interno.

# ¿Qué es un servidor de nombres? 
Dado que la Internet no conoce de nombres, se hace uso de un DNS.
**DNS** Es el nombre que recibe el sistema de nombres de dominio
(DNS, por sus siglas en inglés, Domain Name System) 
que se trata de un sistema de nomenclatura jerárquico
descentralizado para dispositivos conectados a redes IP como Internet
o una red privada.

Grosso modo lo que realiza este sistema es la asociación de información variada
con nombre de dominio asignado a cada uno de los participantes. 
Su función más importante es “traducir” nombres inteligibles para las personas
en identificadores binarios asociados con los equipos conectados a la red,
esto con el propósito de poder localizar y direccionar estos equipos mundialmente.

> **El servidor DNS utiliza una base de datos distribuida y jerárquica que almacena
información asociada a nombres de dominio en redes como Internet.**

Ejemplos:
- platzi.com: 104.20.54.150
- google.com: 172.217.19.206

DNS se encargará de traducir la dirección IP a el nombre.

<img src="img_courses/dns-aws.png">

> Imagen obtenida de la clase número 3 del curso práctico de Networking y
> Content Delivery en AWS de Platzi, para fines no lucrativos. 

# ¿Qué es un CDN? (O red de distribución de contenido)

- **CDN:** Es una red de servidores en el mundo con copias de tu sitio favorito, para que cargue más rápido en
 tu dispositivo de cómputo. **Es una red superpuesta de computadoras que contienen copias de archivos**, colocados en
 varios puntos de una red con el fin de maximizar el ancho de banda para el acceso a los datos de clientes por
 la red.
- **Tipos de archivos:** HTML, CSS, JS, Imágenes, entro otros (prácticamente cualquier cosa que se pueda servir en un
servidor web)
- **CloudFront:** Es un CDN, es decir, CloudFront pone tus archivos en varios servidores en el mundo.
  Es un servicio rápido de red de entrega de contenido (CDN) que distribuye a clientes globalmente datos, vídeos,
  aplicaciones y API de forma segura, con baja latencia, altas velocidades de transferencia y dentro de un entorno
  fácil para desarrolladores.
  
  
# ¿Qué es un endpoint? 
Es un punto de contacto entre tu servicio web y el internet. Podemos pensarlo como una 
dirección pública de Internet donde puede llegar una app móvil, un sitio web o un sistema de APIS para
preguntar algo al servidor.

### ¿Por qué un concepto nuevo? 
Piensa un endpoint como una dirección genérica que puedes resolver con distintos criterios, como por ejemplo: 
enviar a distintas versiones de tu servicio. 

> Puedes administrar diferentes versiones de tu API, sitio web, etc especificando argumentos en tu llamada a la
> dirección de tu sitio web. 

# Arquitectura Web en AWS

A grandes rasgos tenemos estos tres grupos de componentes 
<img src="img_courses/arqui-aws.png">
> Imagen que muestra grosso modo tres grupos de una arquitectura en aws, créditos para Platzi

1. **Los usuarios o los clientes:** Pueden ser mediante dispositivos móviles, sitios web, servicios web, apis o
 microservicios. En este nivel se hacen peticiones al servidor para tener imágenes o vídeos, textos, páginas, etc.
 Esta información viaja através de internet y se hace todo el proceso de DNS y el resultado de esta consulta 
 se va a los endpoints. Que es el segundo grupo en la imagen. 
2. **Un endpoint:** en Amazon puede ser una API Gateway, que es un lugar público a lque te puedes conectar 
desde puertos HTTP o HTTPS y pedir contenido. Internamente esta información se va a un dispositivo de cómputo o 
servidor dentro de Amazon como instancias EC2, funciones Lambda, etc. Que son el tercer grupo de la imagen. 
> Puedes tener varios endpoints dependiendo de los servicos que requieras. 


En Amazon puedes monitorear tus datos o servidores usando el servicio de **CloudWatch** que anota todos los
movimientos de archivos, reportando si algo falla o sale bien. 
CloudWatch también tiene mecanismos de caché, ahorrando llamadas al servidor.

# ¿Qué es VPC? (Teoría)

- **VPC Virtual Private Cloud:** Es una nube privada dentro de la gran nube de Amazon y ahí puedes hacer lo que
 quieras, como poner servidores, bases de datos y otros. Puedes hacer interactuar tus servidores dentro de la
 misma VPC o exponerlos hacia internet.

**El contenido en tu VPC tendrá dos IPs**. _Una privada interna_ y la otra es _una pública_ que es la IP por la
cual alguien externo puede visualizar el contenido. También puedes configurar protocolos de seguridad para hacer
tus IP públicas sólo en ciertos puertos, usando Amazon para configurarlo.

### Un VPC funciona así:
Tienes por un lado cualquier dispositivo conectado a internet, el cual se conecta a la red de AWS y a su vez
dentro de esta red, viven diferentes VPC (Puedes tener varias VPC en tu cuenta)

**Importancia de un VPC:**
- Se pueden asignar IPs estáticas “internas” de manera gratuita.
- Se puede asignar una dirección IPv6 tanto al VPC como a instancias, aunque la más usada es la versión IPv4.
- Se puede asignar múltiples IPs a una instancia, con la posibilidad de comprar por un bajo precio una IP
 elástica (siempre será la misma)
- Cambiar los grupos de seguridad en vivo.
- Control fino sobre el tráfico saliente
- Controles de seguridad extras a nivel de red (ACLs)

<img src="img_courses/vpc-aws.png">
> Imagen que muestra grosso modo una vpc en Amazon, créditos para Platzi
