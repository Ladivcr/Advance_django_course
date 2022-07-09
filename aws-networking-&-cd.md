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
