# Curso de Django Intermedio: Testing, Static Files, Django Admin


# ¿Qué son los test?

- Los test son funciones que verifican que nuestro código opere correctamente

¿Para que hacer los test? 
- Encontrar errores de código: Sirven para encontrar errores futuros que a simple vista no seríamos capaces de ver
- Nos hacen ser más profesionales: Le dan un aspecto profesional a nuestro código y nos permite trabajar en equipo ya que cuando se hace una aportación 
se podrá saber si fue pertinente o no, si rompe los test
- TDD (Test Driven Development): Antes de escribir el código, lo mejor es escribir el test

**Aporte sobre como mockear respuestas:** https://platzi.com/blog/tests-python-usando-mock/

## Pasos a seguir para los tests

1. Identificamos un problema
2. Creamos un test
3. Corremos el test
4. Arreglamos el problema
5. Corremos el test

> Cuando quieres probar modelos en los test de django, se crea una base de datos de prueba que es eliminada
> de manera automatica cuando se terminan de correr todos los test. 

### Puntos a tener en cuenta sobre los test

- **A mayor cantidad de test, menor cantidad de bugs que puedan aparecer**
- **Procura que el nombre de tu test sea descriptivo**

