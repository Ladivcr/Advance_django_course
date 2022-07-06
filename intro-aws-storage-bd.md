# Cómputo en AWS

### Instancias o máquinas virtuales
Una máquina virtual es un software que simula un sistema operativo, y que puede ejecutar programas 
dentro de dicho sistema como si fuera una computadora real.
Los servicios de máquinas virtuales (o instancias) en AWS son:

- **Amazon EC2:** máquinas virtuales seguras y redimensionables.
- **Amazon EC2 Spot:** cargas de trabajo tolerante a fallas, por hasta el 90% del precio normal
 (nota: Amazon puede reclamar estas instancias en cualquier momento con solo dos minutos de anticipación).
- **Amazon EC2 AutoScaling:** agrega o elimina automáticamente la capacidad informática para
 satisfacer tus necesidades bajo demanda.
- **Amazon EC2 LightSail:** plataforma en la nube fácil de usar para crear una aplicación o un sitio web.

### Contenedores
Un contenedor es una unidad de software que empaca un software en específico junto con sus dependencias.
Se diferencian de las máquinas virtuales en que estas virtualizan el hardware,
mientras que los contenedores virtualizan el sistema operativo.
Los servicios de contenedores de AWS son:

- **Amazon Elastic Container Services (ECS):** servicio para correr contenedores confiables y escalables.
- **Amazon Elastic Container Registry (ECR):** servicio para almacenar, administrar e implementar imágenes de contenedores.
- **Amazon Elastic Kubernetes Service (EKS):** servicio de Kubernetes administrado por AWS.

### Serverless
La computación **serverless** se refiere a que **la responsabilidad de administrar servidores
o máquinas virtuales se le delega al proveedor de nube**, por lo que sólo debemos precuparnos
por el código de nuestras aplicaciones. **Amazon Lambda** nos permite ejecutar piezas de código sin servidores.

### Servicios de borde (Edge)
El Edge Computing se refiere **al cómputo y procesamiento de datos en
una ubicación cercana a la necesaria para el negocio.** Los servicios de borde o edge computing de AWS son:

- **Amazon Outposts:** permite ejecutar los servicios de AWS en nuestros propios servidores en lugar de Amazon.
- **Amazon Snow Family:** es una familia de dispositivos desde un disco duro portátil hasta un semi-remolque
 completo lleno de discos de almacenamiento. Estos dispositivos te permiten cargar archivos en ellos,
 para luego ser enviados a Amazon y cargados en sus servidores.
- **AWS Wavelength:** permite acceder a los servicios AWS desde dispositivos 5G sin pasar por Internet.
- **VMWare AWS:** permite migrar cargas de trabajo de VMWare a AWS.
- **AWS Local Zones:** permite ejecutar las aplicaciones más cerca de los usuarios finales,
 a una menor latencia.


> Resumen realziado con los aportes de: Jesús Ignacio García Fernández, Eduardo Zamarron Muñoz y Ciro Villafraz.

# Amazon EC2
**EC2 permite alquilar máquinas virtuales, llamadas instancias EC2.** Puedes elegir diferentes tipos de EC2
con diferente CPU, RAM y almacenamiento. Hay instancias optimizadas para cómputo, memoria y almacenamiento, entre otras.

En EC2, el sistema de pago más común es por hora o por segundo, dependiendo el tipo de instancia.
Por ejemplo, para una instancia que cueste $0.1 la hora, puedes pagar, ya sea una instancia por 24 horas
o 24 instancias por una hora. En ambos casos pagas lo mismo (24 * 0.10 = $2.4).

### Opciones y precios bajo demanda
Las instancias pueden redimiensionarse. Puedes empezar por una instancia de bajo costo, y si necesitas aumenta su 
capacidad, apagas la instancia y seleccionas un nuevo tipo de instancia. Cuando enciendas de nuevo la
instancia, verás su capacidad aumentada.

La siguiente tabla muestra algunos tipos de instancias.


| Nombre	| Especificaciones |	Precio |
| --- | --- | --- |
| t3.nano |	2 vCPU’s, 0.5 GiB RAM |	$0,0052/hora |
| t3.xlarge |	4 vCPU’s, 16 GiB RAM |	$0,1664/hora |
| c6g.8xlarge	 | 32 vCPU’s, 64 GiB RAM |	$1,088/hora |
| X1e.xlarge	 | 128 vCPU’s, 3904 GiB RAM, 2x 1920 GB SSD |	$26,688/hora |

> Resumen realizado gracias a Ciro Villafraz.
