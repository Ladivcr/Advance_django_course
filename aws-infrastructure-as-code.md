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

# Herramientas para desplegar infraestructura como código

1. **Terra:** Despliegues multi cloud, posee una version open source y otra enterprise
2. **Pulumi:** Despligues multi cloud, podes sacar ventajas tus conocimientos en un lenguaje
3. **Serverless Framework:** Para el despliegue de Lambdas, DynamoDB, api gateway, s3, kinesis
4. **SDK:** provista diferentes lenguajes, para python se llama boto3
5. **CDK (Cloud Development Kit):** Diferencia con el sdk, es que no va usar librerias particulares, sino que dentro del mismo codigo python
 vamos a llamar a los recursos y crearlos. Por detras cdk va a generar un template de CFN.
6. **AWS SAM (Serverless Aplication Model):** Para el despliegue de Lambdas, DynamoDB, api gateway, kinesis. Cambia la definición del recurso,
 para desplegar una lambda en CFN se declara como “AWS::Lambda::Function” y en SAM “AWS::Serverless::Function”

### What is CloudFormation?
> AWS CloudFormation is an AWS service that uses template files to automate the setup of AWS resources.

# Introducción y ventajas de usar Cloudformation

- **Flujo de despliegue:** Código, se verifica y hay una fase de despliegue. **Se pueden crear templates en formato YAML o JSON**.
- **Servicios:** Stacks, stack sets, integración full con todos los componentes de AWS.
- **Beneficios:** AWS brinda soporte sobre tu código de cloudformation en caso de que no despliegue tu integración, es decir brinda soporte sobre
 tu código si tienes el plan bussiness contratado.
- Integración nativa con todos los servicios de AWS.
- **Designer:** Te permite crear infraestructura de forma visual y si ya lo tienes creado, cargas tu plantilla y veras como luce.
- **Multicuenta:** Desplegar en 3 cuentas diferentes la misma infraestructura.
- **Flexibilidad:** Creación de recursos dinámicamente con custom resources.
- **Cloudformation:** Gratis, se te cobra por los recursos que este despliegue.
- **Escalabilidad:** Puede crecer desde el recurso mas simple hasta una arquitectura más compleja.
- **Seguridad:** Todos los despliegues están completamente asegurados, cifrado de llaves, etc.
- **Estabilidad:** Al ser administrado por AWS tiene un alto nivel de SLA.
- **Transaccional:** Espera a que todos los recursos estén creados para desplegar la aplicación, sino hará un rollback.

> Empresa que usan Cloud Formation: Barcelona FC, Expedia, Coinbase, nextdoor.
