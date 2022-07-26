# Curso Práctico De Arquitectura Backend

# Qué son los sistemas distribuidos

- **Sistema Monolítico:** Es un sistema conformado por una sola "pieza". 
- - Ejemplo de sistema monolítico: Un único servidor que hospeda uno o más sitios web con LAMP (Linux, Apache, MySQL, PHP) stack 
- **Sistema Distribuido:** Compuesto de múltiples componentes que se comunican entre si usando redes

# Elementos de un sistema distribuido en la nube

Elementos que podemos encontrar
- Load Balancers
- Máquinas Virtuales
- Bases de Datos (Relacionales y No Relacionales) 
- Servicios de Colas (ej. SQS) 
- Servicios de Storage (ej. S3)
- Servicios Publisher-Subscriber (ej. SNS) 
- Pipelines
- etc... 

# Cómo se conecta todo en el backend

El backend de un sistema puede estar conformado por múltiples componentes para su funcionamiento 

Sin embargo, independientemente de la implementación, **generalmente debe exponer una API (Interfaz de Programación de Aplicaciones**). 
