# Selenium

> Suite de herramientas para automatización de navegadores 

**Ventajas**
- Compatible con diferentes navegadores: Firefox, Chrome, Edge, Safari, Opera
- Compatible con diferentes lenguajes de programación: Java, C#, Kotlin, php, Python, Ruby, Javascript

## Selenium IDE 

### PROS
- Excelente para iniciar
- No requiere saber programar
- Exporta scripts para Selenium RC y Selenium WebDriver
- Genera reportes

### Contras
- Disponible solo para Firefox y Chrome
- No Soporta DDT (Data Driven Testing)
- > No podemos colocar datos para que realice multiples pruebas

## Selenium RC

### PROS
- Soporte para
- - Varias plataformas, navegadores y lenguajes
- - Operaciones lógicas y condicionales
- - DDT
- - Posee una API madura

### Contras
- Complejo de instalar
- Necesita de un servidor corriendo 
- Comandos redundantes en su API
- Navegación no tan realista

## Selenium WebDriver (herramienta del curso) 

### PROS
- Soporte para múltiples lenguajes
- Fácil de instalar
- Comunicación directa con el navegador
- Interacción más realista 

### Contras
- No soporta nuevos navegadores tan rápido 
- No genera reportes o resultados de pruebas
- Requiere de saber programar

## Selenium Grid

### Característivcas
- Se utiliza junto a Selenium RC
- Permite correr pruebas en paralelo 
- Conveniente para ahorrar tiempo 


## Aclaración
- Selenium NO es una herramienta de Testing ni de Web Scraping 
> Se puede utilizar pero no esta diseñado para ello, por lo tanto puede que no
> sea muy optimo su desempeño


# Otras herramientas para testing
## Puppeteer
**PROS**
- Sopoerte por parte de Google
- Datos del Performance Analysis de Chrome
- Mayor control de Chrome
- No requiere de drivers externos

**Contras**
- Funciona solo en Chrome y con JavaScript
- Comunidad pequeña 

## Cypress.io
**PROS**
- Comunidad emergente
- Buena documentación con ejemplos
- Bastante ágil en pruebas E2E
- Orientado a desarrolladores
- Excelente manejo de asincronismo 

**Contras**
- Funciona solo en Chrome y con JavaScript
- Pruebas en paralelo solo en versión pago


# Instalación y configuración del entorno
- Descarga Python, una versión mayor a 3.6
> Si tú al igual que yo, no quieres instalar librerias de más, te recomiendo que hagas un entorno virtual con python 
> para hacerlo, sigue los pasos siguientes.

```python
# Para crearlo
python -m venv ENVNombreDeTuEntorno
# Para activarlo
ENVNombreDeTuEntorno\Scripts\activate.bat
# Para desactivarlo 
Deactivate
```

Ahora sí, ya puedes instalar la otra herramienta
haciendo: 
- pip3 install pyunitreport

# Unittest (PyTest)
- Test Fixture: Preparaciones para antes y después de la prueba
- Test Case: Unidad de código a probar
- Test Suite: Colección de Test Cases
- Test Runner: Orquestador de la ejecución 
- Test Report: Resumen de resultados

# Primer código 

```python
# Con unittest nos podemos traer todas nuestras pruebas
import unittest
# Ayuda a orquestar cada una de las pruebas que estaremos
# ejecutando junto con los reportes
from pyunitreport import HTMLTestRunner
# Para comunicarnos con el navegador usamos webdriver
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from webdriver_manager.chrome import ChromeDriverManager

class HelloWorld(unittest.TestCase):
	# Realiza todo lo necesario antes de empezar la prueba
    @classmethod # Decorador para que las distintas paginas corran en una sola pestaña
    def setUpClass(cls):
        #cls.driver = webdriver.Chrome(executable_path=r"./chromedriver.exe")
        cls.driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
        driver = cls.driver
		# esperamos 10 seg antes de realizar la siguiente accion
        driver.implicitly_wait(5)

	# Caso de prueba donde realizaremos una serie de acciones para que el navegador las automatice
    def test_hello_world(self):
        driver = self.driver
        driver.get('https://www.platzi.com')

    def test_visit_wikipedia(self):
        self.driver.get('https://www.wikipedia.com')
        
		
	# Cerramos el navegador una vez terminadas las pruebas
    @classmethod
    def tearDownClass(cls):
        cls.driver.quit()

if __name__ == "__main__":
	unittest.main(verbosity = 2, testRunner = HTMLTestRunner(output = 'reportes', report_name = 'hello-world-report'))
```

- Usar **cls** en el setUpClass y en tearDownClass así cómo los decoradores **@classmethod**
nos ayuda a que todo corra sobre una misma ventana y no se este cerrando.
