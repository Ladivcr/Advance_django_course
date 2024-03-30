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
  
