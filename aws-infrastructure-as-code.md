# Infraestructura como código 

# Cómo desplegar infraestructura en Cloud

Cuando se habla de infraestructura en Cloud es necesario tener en cuenta diferentes cosas: 
1. Vamos a tener diferentes herramientas para desplegrar infraestructura en Cloud
2. Vamos a tener diferentes Cloud providers en los que podemos desplegar una infraestructura

Cuando trabajamos en proyectos de despliegue de infraestructura de forma automatizada y de aplicaciones.
**Una de las ventajas que tenemos es el versionamiento.** Ya que podedmos tener nuestra infraestructura versionada.

**Ejemplo:**

- Si tienes una app corriendo en un servidor y ahora le vas a añadir una BD.
La versión 1 puede tener el servidor y la versión 2 puede tenr la base de datos. 

Otras ventajas: 

- **Trazabilidad:** Se puede tener control y trazabilidad sobre cada despligue (como los commits en git)
- **Eficiencia:** Tienes una plantilla de código que se va a usar para desplegar la infraesctructura. Por lo que 
se puede usar dicha plantilla para diferentes ambientes. De tal forma que mejoras el tiempo de despliegue. 
- **Re-utilizable**: Tienes un template en el que tienes múltiples recursos, si cambias de proyecto, puedes
reutilizar el template sin problema.
- **Infraestructura inmutable:** La infraestructura no puede cambiar. 
- - **Ejemplo:** Tenemos un servidor corriendo con Mysql, apache web server y php. Y de repente surge un kernel panic. Podemos entrar al 
servidor y pasar tiempo tratando de solucionar el error. La otra opción es hacer uso del template que ya tenemos y volver a desplegarlo
desde cero. Esa es la escencia de la infraestructura inmutable. 


