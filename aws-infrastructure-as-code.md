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

# Anatomía de un template en CloudFormation
- `AWSTemplateFormatVersion: '2021-09-09'`: [Opcional] Define las capacidades de la plantilla, si no es 
especificado. Amazon lo va a especificar con una versión por default (2010-09-09). 
- `Description: String`: [Opcional] Es un texto para describir la plantilla
- `Metadata: String`: [Opcional] Información adicional del template
- - AWS::CloudFormation::Init
- - AWS::CloudFormation::Interface
- - AWS::CloudFormation::Designer
- `Parameters: set of parameters`: [Opcional] Valores que se le pasan a la plantilla cuando se crea o actualiza
un stack. Pueden ser referenciados desde Resources u Outputs. 
- -  **Ejemplos:** 
```yml
Parameters:
    myKeyPair:
        Description: "Amazon EC2 key pair"
        Type: "AWS::EC2::KeyPair::KeyName"
    mySubnetIDs:
        Description: "Subnet IDs"
        Type: "List<AWS::EC2::Subnet::Id>"
```
```yml
Parameters:
    DbSubnetIpBlocks:
        Description: "Comma-delimeted list of three CIDR blocks"
        Type: CommaDelimetedList
        Default: "10.0.46.0/24, 10.0.112.0/24, 10.0.176.0/24"
```
```yml
Parameters:
    DbPort:
        Default: 3306
        Description: "TCP/IP port for the database"
        Type: Number
        MinValue: 1150 // Rango permitido
        MaxValue: 65535 // Rango permitido
    DbPwd:
        NoEcho: true // Valor Seguro (****)
        Description: "The database admin account password"
        Type: String
        MinLength: 1
        MaxLength: 41
        AllowedPattern: ^[a-zA-Z0-9]*$ //Cumplir expresión
```
- `Mappings: set of mappings`: [Opcional] Llave valor asociados que se usan para parámetros condicionales.
Similar a una tabla de búsqueda. Utiliza la función **Fn::FindInMap**
- - Ejemplo: Nosotros tenemos un servidor, ese servidor lo vamos a desplegar en tres regiones: Fráncfort, Sao Paulo y Virginia. El mapping lo que va a evaluar es la región donde se encuenttra y con ayuda del mapping
usa ese AMI evaluando el id de la imagen.
```yml
Mappings:
  RegionMap: 
    us-east-1: 
      "HVM64": "ami-0ff8a91507f77f867"
    us-west-1:
      "HVM64": "ami-0bdb828fd58c52235"
    eu-west-1:
      "HVM64": "ami-047bb4163c506cd98"
    ap-southeast-1:
      "HVM64": "ami-08569b978cc4dfa10"
    ap-northeast-1:
      "HVM64": "ami-05cd52961ce9f0d85"
```
- `Conditions: set of conditions`: [Opcional] Controla si se crean ciertos recursos o si se asigna un valor a ciertas propiedades durante
la creación del stack
- - **Ejemplo:** 
```yml
NewVolume:
  Type: "AWS::EC2::Volume"
  Condition: CreateProdResources
  Properties: 
    Size: 100
    AvailabilityZone: !GetAtt EC2Instance.AvailabilityZone
```
> Si la Condition es true, entonces crea un nuevo volúmen. 
>  Pero si los recursos de producción no se han creado, entonces el volumen nunca se va a crear. 
- `Transform: set of transforms`: [Opcional] Para aplicaciones serverless (aplicaciones basadas en AWS SAM), si se especifíca se pueden usar
 sintaxis de AWS SAM
> Es importante que el template este definido como transform para que podamos crear estos recursos usando AWS SAM.
- `Resources: set of resources`: [Obligatorio] Especifica los recursos y las propiedades a crear
- - Ejemplo: En el caso de nuestra función lambda se veria de la siguiente manera
```yml
Resources: 
  LambdaPlatzi: 
    Type: AWS::Serverless::Function
    Properties: 
      FunctionName: !Ref NombreLambda
      Handler: lambda_function.lambda_handler
      Runtime: !Ref RuntimeLambda
      MemorySize: 512
      Timeout: 600
      Role: !GetAtt LambdaRolePlatzi.Arn
```
- `Outputs: set of outputs`: [Opcional] Valores devueltos de las propiedades del stack
> Los outputs son "export" de las propiedades de los recursos que creamos. 
- - **Ejemplos:** En la función lambda podemos exportar el ARN para que quede público y cuando creamos otro recurso
- - que se va a conectar con la función lambda, decirle al otro recurso que tome ese output de la lambda y lo utilice.
- - En el caso de DynamoDB, creamos la base de datos y exportamos el nombre de la tabla. Cuando creemos la función lambda, le
- - decimos que tome ese "export" y utilizalo como variable de entorno. 
```yml
Outputs: 
  LambdaARN: 
    Description: "ARN de la función Lamdba"
    Value: 
      !GetAtt LambdaPlatzi.Arn
    Export: 
      Name: LambdaPlatziArn
    LambdaName: 
      Description: "Nombre de la función Lambda"
      Value: 
        !Ref LambdaPlatzi
      Export: 
        Name: LambdaPlatziName
```
> En este ejemplo se exporta el ARN de la lambda y el nombre de la lambda.

> Nota para mi: Observa que LambdaPlatzi es el nombre del Resource de la Lambda en el ejemplo anterior a este.

> ARN: Amazon Resource Name

### ¿Cómo quedaria nuestra función lambda usando parámetros? 
```yml
AWSTemplateFormatVersion: '2021-09-09'
Description: Mi primer lambda en Platzi

Parameters:
    NombreLambda:
      Description: Nombre de la funciónn lambda
        Type: String
       
    RuntimeLambda: 
      Description: Ingresa el runtime de la función lambda
      Type: String
      Default: python3.7
      AllowedValues: 
        - python3.7
        - python2.7
        - ruby2.5
        - nodejs8.10
        - java8
        - dotnetcore2.1
```

# Clase práctica creación de un template

### Template para crear una tabla en DynamoDB
- [Formato yml para DynamoDB](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dynamodb-table.html)

```yml
AWSTemplateFormatVersion: '2021-09-09'
Description: Mi primer lambda en Platzi

Parameters:
  DynamoAtributo: 
    Type: String
  NombreDynamo: 
    Type: String

Resources:
  DynamodesdeCero: 
    Type: AWS::DynamoDB::Table
    Properties: 
      AttributeDefinitions: 
        - AttributeName: !Ref DynamoAtributo
          AttributeType: S
      KeySchema: 
        - AttributeName: !Ref DynamoAtributo
          KeyType: HASH
      BillingMode: PAY_PER_REQUEST //On demand
      SSESpecification: 
        SSEEnabled: true
      TableName: !Ref NombreDynamo
      
Outputs: 
  NombreDynamo: 
    Value: !Ref DynamodesdeCero
    Export: 
      Name: NombreDynamo
```

# Stacks: características y despliegue

### ¿Qué es un Stack? 
Colección de recursos que se manejan como una unidad
- Ejemplo: Tenemos una base de datos, tenemos una función lambda y tenemos un S3 de almacenamiento, todos esos recursos 
 estan dentro de un stack, una colección de recursos que se va a desplegar en AWS.

### Gestión de recursos
Cloudformation asegura que todos los recursos sean creado o eliminados
- Ejemplo: Si un recurso falla durante la creación, todos los demás recursos serán eliminados. Como un rollback a todos los recursos del stack. 

### ¿Qué pasa si borro un stack? 
Todos los recursos asociados se borran. 

### ¿Qué es un Drift? 
Dentro de Cloudformation tenemos algo llamado "Drift". Lo que hace es detectar una desviación entre lo que desplegadmos originalmente
 y lo que esta en la consola. 
 - Ejemplo: Despliegas una función lambda, una base de datos en Dynamo y un bucket en S3. Pero entraste manualmente y cambiaste la politica del 
 bucket en S3. Ahí tienes una desviación. Puedes usar Drift para identificar la desviación, corregirla y volver al estado original. 
 
 > **Las desviaciones son malas prácticas, no se debería tener nunca una desviación.**

### ¿Qué puedo identificar con un Drift? 
Recursos agregados, eliminados y con propiedades diferentes. 

### Despliegues de stacks
1. Nuestro stack: Función lambda, Bucket S3, Base de datos Dynamo
2. El stack se convierte en un template con ayuda de un template.yml
3. El template se carga a Cloudformation: ya sea cargandolo a un s3 y copiando la ruta del archivo o cargarlo directamente a Cloudformation
4. Se le hace una validación al template.yml
5. Si el check pasa, se procede a despliegar todos los recursos en Cloudformation

# Stack Sets: despliegues multicuenta

## Características
### ¿Qué tipo de cuentas existen? 
Cuentas administrador y cuentas target

### ¿Desde dónde se despliegan recursos Multi Cuenta? 
Se debe hacer desde una cuenta maestra que tenga permisos sobre las otras
