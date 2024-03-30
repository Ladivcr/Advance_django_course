# [1] ¿Qué es OWASP Top 10?

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
