# Listado de capitulos (because, the document is laaarge)
- [¿Qué es OWASP Top 10?](#WhatIsOwasp10)
- [¿Cómo utilizar OWASP Top 10?](#HowToUseOwasp10)
- [Broken Access Control - A01](#A01)
- - [PRÁCTICA BROKEN ACCESS CONTROL](#praA01)
- [Cryptographic Failures - A02](#A02)
- - [PRÁCTICA Cryptographic Failures](#praA02)




<h1 id="#WhatIsOwasp10">¿Qué es OWASP Top 10?</h1>

OWASP, que significa Open Web Application Security Project, es una organización sin fines de lucro que trabaja para mejorar la seguridad
del software a través de la identificación y la divulgación de las fallas de seguridad más críticas.
OWASP ha generado múltiples propyectos de importancia como TOP 10 que recolecta los 10 riesgos más imporantes que los Devs deben considerar para mitigar vulnerariblidades.
Este listado es ampliamente reconocido y respetado en la industria de la ciberseguridad y sirve como un punto de partida para las organizaciones que buscan mitigar
los riesgos de seguridad en sus aplicaciones web.

El OWASP Top 10 se actualiza periódicamente para reflejar la evolución del paisaje de amenazas y las prácticas de seguridad.
Aunque los elementos específicos de la lista pueden cambiar con cada actualización, típicamente incluyen vulnerabilidades
como inyección SQL, cross-site scripting (XSS), exposición de datos sensibles, y configuraciones incorrectas de seguridad, entre otros.
Cada elemento de la lista incluye una descripción de la vulnerabilidad, ejemplos de cómo puede ser explotada, y recomendaciones para mitigar o prevenir el riesgo.

> OWASP Top 10 es el primer paso hacia desarrollo seguro de código. Top 10 acompaña en todo el ciclo de desarrollo de Software y se puede contribuir y participar en la comunidad OWASP.

## Las 3 variables importantes (o insumos) en OWASP T10 son:
1. [Common Weakness Enumeration](https://cwe.mitre.org/): un listado de fallas en software y hardware mantenidos por la comunidad
2. [Common Vulnerabilities and Exposures](https://www.cve.org/): Repositorio de vulnerabilidades asociados a productos, aplicaciones o activos de información
3. [National Vulnerability Database](https://nvd.nist.gov/): Repositorio de vulnerabilidades gestionado por el Gobierno de Estados Unidos

## Orden de riesgos
Para definir el orden de los riesgos en el proyecto TOP 10 de OWASP se toman en consideración las 
siguientes variables: 
- Porcentaje de aplicaciones probadas a determinado registro CWE
- Porcentaje de aplicaciones vulnerables para el mismo registro CWE
- Número de aplicaciones vulnerables asociadas al porcentaje anterior
- Número de registros CWE mapeados hacia la categoría
- Número de vulnerabilidades (O CVE's) debidamente sincronizado con la BD de vulnerabilidades del gobierno de los Estados Unidos

<h1 id="HowToUseOwasp10">¿Cómo utilizar OWASP Top 10?</h1>
# [2] ¿Cómo utilizar OWASP Top 10?

La utilización del OWASP Top 10 como una herramienta para mejorar la seguridad de las aplicaciones web implica varias estrategias y prácticas.

- Una manera es crear programas de aseguramiento de aplicaciones en dónde debes incluir metas alcanzables, el ciclo de vida del desarrollo de software seguro y
finalmente, un nivel de madurez de la aplicación en dónde podemos apoyarnos de [OWASP SAMM](https://owaspsamm.org/).
> OWASP SAMM Resume los requerimientos de seguridad en funciones de negocio: Govierno, Diseño, Implementación, Verificación y Operaciones.

- También podemos usar OWASP Top 10 para crear educación continua en los equipos. Para esto podemos usar proyectos como [OWASP ASVS](https://owasp.org/www-project-application-security-verification-standard/)
  (Application Security Verification Standard, por sus siglas en inglés).
> OWASP ASVS Reune un gran listado de requerimientos de seguridad debidamente agrupados, codificados y con un código CWE asociado. 

  
A continuación, se describe un enfoque estructurado sobre cómo las organizaciones y los desarrolladores pueden hacer uso del OWASP Top 10 para fortalecer la seguridad de sus aplicaciones:

## 1. Educación y Concienciación

- **Capacitación del equipo de desarrollo:** Organizar sesiones de capacitación y talleres para los equipos de desarrollo y seguridad
   sobre las vulnerabilidades listadas en el OWASP Top 10, incluyendo sus implicaciones y cómo pueden ser explotadas.
- **Integración en el proceso de diseño:** Incluir la seguridad como un componente fundamental en las fases iniciales del diseño de aplicaciones web, utilizando el OWASP Top 10 como una guía para discutir posibles riesgos de seguridad.

## 2. Integración en el Ciclo de Desarrollo del Software

- **Revisión de código:** Implementar revisiones de código regulares que se centren específicamente en identificar patrones de código que puedan conducir a las vulnerabilidades listadas en el OWASP Top 10.
- **Pruebas de seguridad:** Utilizar herramientas automatizadas de pruebas de seguridad (como escáneres de vulnerabilidades y herramientas de análisis de código estático) que puedan identificar
   problemas relacionados con el OWASP Top 10 en las aplicaciones.

## 3. Mejora Continua

- **Remediación de vulnerabilidades:** Una vez identificadas las vulnerabilidades, es crucial priorizar y remediarlas de manera oportuna, basándose en el nivel de riesgo que cada una representa.
- **Actualización y mantenimiento:** Mantenerse al día con las últimas versiones del OWASP Top 10 y actualizar las prácticas de seguridad de la organización en consecuencia.

## 4. Políticas de Seguridad y Cumplimiento

- **Desarrollo de políticas de seguridad:** Desarrollar y mantener políticas de seguridad que incorporen los principios del OWASP Top 10, asegurando que todos los desarrollos cumplan con un estándar mínimo de seguridad.
- **Auditorías de seguridad:** Realizar auditorías de seguridad periódicas para evaluar la conformidad con el OWASP Top 10 y otras normativas de seguridad relevantes.

## 5. Adopción de Herramientas y Prácticas Recomendadas
- **Utilizar marcos de trabajo y bibliotecas seguras:** Optar por marcos de trabajo y bibliotecas que promuevan prácticas de desarrollo seguro y que estén activamente mantenidos.
- **Implementación de controles de seguridad:** Aplicar controles de seguridad específicos recomendados por OWASP para mitigar las vulnerabilidades, como el uso de Content Security Policy (CSP) para prevenir XSS,
 o la implementación de controles de acceso adecuados para prevenir la exposición de datos sensibles.

## Herramientas de práctica 
- [Proyecto Juice SHOP de OWASP](https://owasp.org/www-project-juice-shop/): Página con varios herrores de desarrollo para concientizar a los desarrolladores.
## Herramientas de laboratorio 
- [Página de pruebas para el curso](https://github.com/platzi/curso-owasp-top-10)
> Ahí encontraremos todo lo necesario en cuanto a herramientas necesarias para llevar a cabo el curso.

En lo personal me he montado Kali Linux para ahorrarme la instalación de algunas herramientas como: bupsuite o dirbuster. 
El tutorial que he seguido lo puedes ver aquí: [Como Instalar y Descargar Kali Linux 2024.1 en VirtualBox [Windows 10] - Desde Cero!](https://www.youtube.com/watch?v=iGmACGL3nos&ab_channel=ContandoBits)

--- 
<h1 id="A01">Broken Access Control [A01]</h1>

> A partir de aquí, comienzan las pruebas usando el laboratorio.
> La lista de las 10 vulnerabiliades la puedes ver en: [OWASP TOP TEN](https://owasp.org/www-project-top-ten/)

Se refiere a una categoría de vulnerabilidades de seguridad en aplicaciones web donde las restricciones sobre
lo que los usuarios autenticados están autorizados a hacer no se implementan o se implementan incorrectamente. 
Esta vulnerabilidad ocurre cuando un usuario puede realizar acciones fuera de sus permisos previstos, como acceder a datos o realizar operaciones que deberían estar restringidas.

## Ejemplos Comunes de Broken Access Control
- **Bypass de restricciones de acceso:** Un usuario sin privilegios accede a funciones o datos
  reservados para usuarios con mayores privilegios, como acceder a perfiles de usuario, datos financieros, o realizar acciones administrativas sin las debidas autorizaciones.
- **Modificación de URL o ID de sesión:** Manipular URL o identificadores de sesión para acceder a información o realizar acciones que no deberían estar disponibles
   para el usuario autenticado.
- **Elevación de privilegios:** Un usuario con privilegios bajos manipula la aplicación para otorgarse privilegios más altos.

### Impacto

El impacto de Broken Access Control puede ser significativo y variado, dependiendo de la naturaleza de la aplicación y
los datos o funciones expuestas indebidamente. Puede conducir a la divulgación no autorizada de información sensible,
modificación de datos, realización de transacciones no autorizadas, e incluso comprometer completamente la seguridad de la aplicación web.

### Mitigación

Para mitigar las vulnerabilidades de Broken Access Control, se recomienda adoptar un enfoque de seguridad en capas que incluya:
- **Principio de menor privilegio:** Asegurarse de que los usuarios tengan solo los permisos necesarios para realizar sus tareas.
- **Autenticación y autorización robustas:** Implementar controles de acceso fuertes y asegurarse de que se verifiquen de manera consistente a lo largo de la aplicación.
- **Controles de acceso a nivel de aplicación:** Utilizar controles de acceso en el servidor, no solo en el cliente, para asegurar que los controles no puedan ser fácilmente evadidos.
- **Auditorías y registros:** Mantener registros detallados de las actividades de acceso para permitir la auditoría y la detección de accesos no autorizados o anomalías.
- **Pruebas de seguridad regulares:** Realizar pruebas de penetración y revisiones de código para identificar y remediar las vulnerabilidades de control de acceso roto antes de que puedan ser explotadas.
  Aplica correctamente rate limits para que no sea posible hacer más de cierta cantidad de peticiones por minuto. 

<h1 id="praA01">PRÁCTICA BROKEN ACCESS CONTROL</h1>


NOTA: Antes de comenzar. Configura la herramienta de Burpsuite, para escuchar las peticiones 

Como primer paso, entramos a la plataforma: `localbox/` y veremos algo cómo: 
![Home de la plataforma](imgs_ciber/A01_OWASP/A01_1.png)
Procedemos a iniciar sesión con el usuario de administrador. 
> user: admin - password: admin
> NOTA: Los usuarios utilizados aquí se encuentran en la página del proyecto.

![Login de la plataforma](imgs_ciber/A01_OWASP/A01_2.png)

Una vez que iniciamos sesión como administrador podemos observar que hay una opción (Admin) a la que
solo se tiene acceso como administrador. 
![Perfil de admin](imgs_ciber/A01_OWASP/A01_3.png)

Si vamos a la opción de Admin, podemos observar que nos lista los usarios de la plataforma. 
![Listado de usuarios](imgs_ciber/A01_OWASP/A01_4.png)

Cerramos la sesión de administrador y ahora iniciamos sesión como un usuario normal.
> user: user1 - password: 1234 

![Login de la plataforma](imgs_ciber/A01_OWASP/A01_5.png)

Al iniciar sesión como un usuario normal podemos observar que la opción de "Admin"
no esta disponible para este usuario. 
![Perfil usuario](imgs_ciber/A01_OWASP/A01_6.png)

Si hacemos una petición al endpoint: `localbox/api/users` que es el endpoint que
se utiliza en la opción de "Admin" para listar los usuarios.
> Lo anterior lo podemos comprobar yendo a la opción "Admin" e inspeccionando la página
> a la hora de entrar a esa opción. Se hace una petición GET a ese endpoint.

Podemos observar que nos arroja el mensaje de que no estamos autorizados.  

![Endpoint localbox/api/users](imgs_ciber/A01_OWASP/A01_7.png)

Si vamos al historial de Burpsuite y revisamos la petición que se realizo cuando iniciamos
sesión como un usuario normal podemos ver el body utilizado pero, si observamos la respuesta,
vemos una cookie cuyo valor se ve interesante. Seleccionamos el valor para una operación posterior.

![Examinación de petición con Burpsuite](imgs_ciber/A01_OWASP/A01_8.png)

El valor que hemos notado anteriormente en la cookie, parece ser un cifrado en base 64, así que utilizando
una herramienta online, procedemos a decodificarlo. Observamos algo muuuuy llamativo.
Un diccionario con el id del usuario pero también con su rol. 

![Decodificación de cookie](imgs_ciber/A01_OWASP/A01_9.png)

Si tomamos, ese diccionario, pero en lugar de conservar el rol "user" lo cambiamos por "admin"
y codificamos nuevamente, en base 64. Observamos que tenemos un valor similar al de la
cookie anterior. Guardamos dicho valor para su posterior uso. 

![Codificación de cookie](imgs_ciber/A01_OWASP/A01_10.png)

Regresamos a Burpsuite y buscamos la petición al endpoint `localbox/api/users` que anteriormente
nos había retornado que no estabamos autorizados. Observamos que dicha petición manda una cookie similar a la que hemos codificado.
Marcamos dicha petición para repetirla. 

![Burpsuite análisis de petición](imgs_ciber/A01_OWASP/A01_11.png)

Con el nuevo valor de cookie codificado anteriormente, realizamos un cambio de cookie en dicha petición.
Y la volvemos a enviar. Observamos que ahora la respuesta no es que no estamos autorizados sino que ahora
¡nos retorna toda la lista de usuarios! Es decir, tenemos privilegios de administrador.

![Burpsuite obtención de usuarios](imgs_ciber/A01_OWASP/A01_12.png)

## Hardening
> En informática, el hardening o endurecimiento es el proceso de asegurar un sistema reduciendo sus vulnerabilidades o agujeros de seguridad,
> para los que se está más propenso cuanto más funciones desempeña; en principio un sistema con una única función es más
> seguro que uno con muchos propósitos. (Wikipedia)

Para poder arreglar esa falla, hace falta realizar un cambio en la manera en que están validando al usuario. Si 
entramos al código fuente de este problema en el repositorio del curso. Podemos observar que se está realizando una
validación de usuario a nivel de Cookie. Por lo que cambiandola a una validación de usuario a nivel de base de datos,
podemos arreglar el problema. 
 
<h1 id="A02">Cryptographic Failures [A02]</h1>

Las "Cryptographic Failures" (anteriormente conocidas como "Sensitive Data Exposure") se refieren a una categoría de vulnerabilidades de seguridad
que se centra en la protección inadecuada de datos sensibles debido a la implementación incorrecta o la falta de cifrado adecuado.
> Este tipo de fallos puede llevar a que los datos sensibles de los usuarios,
> sean expuestos a actores maliciosos, comprometiendo la confidencialidad y la integridad de estos datos.

## Cómo Ocurren los Fallos Criptográficos

Los fallos criptográficos pueden ocurrir por varias razones, incluyendo pero no limitándose a:

- **Uso de cifrado débil o obsoleto:** Implementar algoritmos de cifrado que han sido vulnerados o que son inherentemente débiles aumenta el riesgo de que los datos cifrados sean descifrados por atacantes.
- **Configuración inadecuada de los parámetros de cifrado:** Incluso si se utilizan algoritmos fuertes, una configuración inadecuada (como tamaños de clave insuficientes o modos de operación inseguros) puede comprometer la seguridad.
- **Falta de cifrado:** No utilizar cifrado para datos sensibles en tránsito o en reposo deja la información expuesta a interceptaciones o accesos no autorizados.
- **Gestión inadecuada de claves criptográficas:** La exposición, pérdida o robo de claves criptográficas puede anular los beneficios del cifrado, ya que permite a los atacantes descifrar los datos protegidos.
- **Almacenamiento inseguro de credenciales:** Guardar contraseñas o tokens de autenticación sin las debidas medidas de protección, como el hashing de contraseñas con sal, puede llevar a su compromiso.

## Impacto de los Fallos Criptográficos

El impacto de los fallos criptográficos puede ser significativo, incluyendo:

- **Exposición de datos personales:** Puede llevar a violaciones de la privacidad, robo de identidad, y otros daños personales para los usuarios afectados.
- **Pérdida financiera:** Tanto para los usuarios cuyos datos financieros son comprometidos como para las organizaciones que enfrentan multas, costos de remediación y daños a su reputación.
- **Incumplimiento de regulaciones:** Muchas jurisdicciones tienen leyes que requieren la protección adecuada de datos sensibles, y los fallos criptográficos pueden resultar en sanciones legales y multas.
  > GDPR: Tratamiento de datos personales; PCI DSS: Tratamiento de datos de tarjetahabientes. El incumplimiento de normas nos pueden provocar multas muy grandes. 

## Mitigación de los Fallos Criptográficos

Para mitigar los fallos criptográficos, las organizaciones deben adoptar una serie de prácticas recomendadas, que incluyen:

- **Cifrar todos los datos transmitidos por la aplicación**: Cifrar los datos de punto a punto.
- **Clasificar los datos en función a su nivel de sensibilidad**: Esto se refiere a las normativas de tratamiento de datos personales que aplican en la mayoría de planetas.
- **Implementar políticas de cifrado fuerte:** Utilizar algoritmos y protocolos de cifrado actualizados y recomendados por expertos en seguridad.
- **Gestión adecuada de claves:** Asegurar que las claves criptográficas se almacenen y manejen de forma segura, incluyendo su rotación y revocación cuando sea necesario.
- **Uso de HTTPS y/o protocolos cifrados para el transporte de datos:** Asegurar que todo el tráfico de datos en tránsito esté cifrado utilizando HTTPS con configuraciones actualizadas y seguras.
- **Protección de datos en reposo:** Cifrar datos sensibles almacenados, utilizando soluciones de cifrado de disco completo o cifrado de campos específicos en bases de datos.
- **Auditorías y pruebas de seguridad regulares:** Realizar auditorías de seguridad y pruebas de penetración para identificar y remediar posibles fallos criptográficos.

Al abordar proactivamente los fallos criptográficos, las organizaciones pueden proteger eficazmente los datos sensibles contra accesos no autorizados y cumplir con las obligaciones legales y éticas de proteger la información de sus usuarios.

<h1 id="praA02">PRÁCTICA CRYPTOGRAPHIC FAILURES</h1>

Como primer paso, entramos a la plataforma: `localbox/` y veremos algo cómo: 
![Home de la plataforma](imgs_ciber/A01_OWASP/A01_1.png)

Procedemos a iniciar sesión con el usuario de administrador. 
> user: admin - password: admin
> NOTA: Los usuarios utilizados aquí se encuentran en la página del proyecto.
![Login de la plataforma](imgs_ciber/A01_OWASP/A01_2.png)

Haciendo uso de la herramienta **Wireshark** podemos análisar el tráfico de datos que se a realizado.
Utilizando el filtro http, buscamos la petición POST del inicio de sesión y podemos observar que los datos 
de inicio de sesión se mandan en texto plano. 
![Wireshark tool](imgs_ciber/A02_OWASP/A02_1.png)

## Hardening

Para poder arreglar dicha falla debemos hacer que nuestra aplicación force toda petición en ese login 
a protocolo seguro, es decir, HTTPS. 

Anteriormente, como podemos observar en las lineas comentadas (7 a 21), no había ningún certificado de por medio. 
El servidor solo escuchaba en el puerto 8080 las peticiones y no tenían ningún certificado. 
![Nginx old config](imgs_ciber/A02_OWASP/A02_2.png)

Ahora hacemos que escuche por el puerto 443 que hace uso de SSL. Y redirecciona
al puerto 301 con el protocolo HTTPS. 
> SSL: SSL o Secure Sockets Layer es un protocolo de seguridad de Internet basado en el cifrado.
> Inicialmente fue desarrollado por Netscape en 1995 para garantizar la privacidad, la autenticación y
> la integridad de los datos en las comunicaciones de Internet. Fuente: Cloudflare
![Login de la plataforma](imgs_ciber/A02_OWASP/A02_3.png)

De esta forma, de lado del front-end, cuando se búsque usar solo HTTP. Se forzará el uso de HTTPS.
![Login de la plataforma](imgs_ciber/A02_OWASP/A02_4.png)

# Injection [A03]

> Es el riesgo asociado a datos enviados por el usuario, no sanitizados, validados o filtrados por la aplicación.

La inyección, especialmente la Inyección SQL, es uno de los riesgos de seguridad más críticos y prevalentes en aplicaciones web,
según el OWASP Top 10. Este tipo de vulnerabilidad ocurre cuando un atacante puede enviar o "inyectar" instrucciones no confiables a 
un intérprete como parte de una consulta o comando. Este proceso puede resultar en el acceso no autorizado a datos, la alteración de
estos o incluso la ejecución de operaciones arbitrarias en el servidor afectado.

> **Aunque la Inyección SQL es la forma más conocida, existen otros tipos de inyección, como la inyección de comandos del sistema operativo, la inyección LDAP, y la inyección de código en aplicaciones.**

## Ejemplo: Acceso inseguro a bases de datos

Aquí conviene recordar el concepto de **payload**, que es una cadea mal formada. Cuando se materializa esta cadena, es posible efectuar una inyección SQL. 

- Posible inyección SQL - Dato no sanitizado

En el ejemplo siguiente no se valida la variable en si. Sino que haya un valor ahí. 
```
const result = await db.query(`SELECT * FROM users WHEN user.id = ${UserId}`);
```
- Fix - Dato sanitizado
En este ejemplo, se valida únicamente la variable y el valor asociado a la variable. 
```
const result = await db.query(`SELECT * FROM users WHEN user.id = $1`, [userId]);
```

## Impacto 

Inspección no autorizada del file system. Tal fue el caso de una empresa que no validaba de manera correcta los
inputs, permitiendo así introducir algo como: `; ls -la` donde dichos comandos son propios del SO Linux y lo que hicieron
fue ejecutar la acción del formulario pero a la par, listar los archivos del directorio. 
![Plataforma vulnerada](imgs_ciber/A03_OWASP/A03_ej.png)

## Controles
