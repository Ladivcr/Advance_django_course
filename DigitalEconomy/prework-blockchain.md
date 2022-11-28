# Consideraciones básicas para desarrollo

Las herramientas básicas que necesitarás para empezar en el desarrollo con Blockchain son las siguientes:

## Git
Este es el repositorio y gestor de versiones para código más usado en la industria.
Es esencial un conocimiento básico para un flujo de trabajo eficiente y organizado.
Además de GitHub, GitLab se complementa con tu entorno a la perfección.

## Terminal de comandos o línea de comandos
Algunos le temen, otros la aman. Lo cierto es que es una herramienta superpoderosa
para poder manejar tus archivos de una forma rápida. Es necesaria ya que algunos
paquetes carecen de una interfaz gráfica y deben instalarse desde una terminal.

Cada sistema operativo cuenta con su terminal, y en el desarrollo blockchain encontraremos algunas 
más especializadas, como **RemixIDE para el desarrollo de smart contracts.** 
Solo es cuestión de aprender comandos sencillos para poder sacarles un buen provecho.

## Node.js
Este es el entorno de trabajo para JavaScript orientado a programación
asíncrona, que nos permite diferir la ejecución de una función a la espera
de que se complete una operación distinta.

Con Node.js se tiene a disposición un gestor de paquetes llamado npm, 
que contiene muchas funcionalidades que podremos integrar en nuestro
desarrollo. A este se accede a través de la terminal.

> Aporte creado por: Luis Enrique Herrera

# Lenguajes y herramientas para el desarrollo de blockchain

Puedes hacer uso de diferentes lenguajes de programación al momento
de desarrollar aplicaciones basadas en blockchain, no hay solo uno.

Estos son de los más usados:

- **C++:** Es un lenguaje lineal, muy robusto. Bitcoin tuvo su origen con 
este lenguaje.
- **Python:** Uno más amigable y fácil de aprender, que también es empleado
 para Big Data. Aunque es más lento.
- **JavaScript:** Junto con C++ es el lenguaje que está envuelto en el
 desarrollo de lenguajes especializados de la web3.0, tales como Solidity.
- **Solidity:** Más que un lenguaje de programación, se podría tratar como
 un lenguaje de marcado, aunque es más complejo. Fue desarrollado por Ethereum
 y es utilizado para la construcción de smart contracts y su despliegue directo en la EVM
 (Ethereum Virtual Machine). Su sintaxis es muy parecida a la de JavaScript y a la programación orientada a objetos.

## Otras herramientas
Estos son entornos de trabajo para poder escribir nuestro propio código o incluso
utilizar librerías y frameworks para un flujo más eficiente:

- **Visual Studio Code:** el IDE más popular en los últimos años, no parece
 que quiera dejar este lugar en algún momento pronto. Al ser de código abierto,
 tiene la enorme ventaja de poder ser complementado con una infinidad de
 extensiones para agregarle herramientas que facilitan el desarrollo y lo vuelven una tarea cada vez más entretenida y cómoda.
- [**RemixIDE:**](https://remix.ethereum.org/) el IDE ideal si se quiere empezar con el desarrollo de smart contracts.
Está alojado en la nube, por lo que su acceso está abiero sin tener que descargarlo en el
ordenador. Aquí también es donde se usará Solidity, el lenguaje nativo de la aplicación.
- [**Truffle Suite:**](https://www.trufflesuite.com/) este es un framework especializado en el desarrollo para 
smart contracts. **Sirve para el uso de dependencias en el desarrollo de dApps**
(aplicaciones descentralizadas).
- [**Hyperledger:**](https://www.hyperledger.org/) Es una plataforma que brinda una infraestructura y los recursos necesarios para la 
construcción de proyectos blockchain de código abierto. Con este es posible, pues, crear una blockchain 
propia.


# Solidity

Solidity es el lenguaje más popular en web3.0. No solo es usado para Ethereum,
pues es compatible con varios protocolos.

Es un lenguaje de alto nivel orientado a contratos 
(similar a la programación orientada a objetos). Fuertemente influenciado por C++, Python y JavaScript.
Se empezó a desarrollar hace algunos años por Gavin Wood, uno de los primeros colaboradores de Ethereum.

En Ethereum.org se puede hallar toda la documentación relacionada con este lenguaje, 
que será de gran utilidad para entenderlo. Así también en [solidity-by-example.org](https://solidity-by-example.org/)
donde se hallarán ejemplos de contratos hechos y funcionales que se han recolectado a través de los últimos años.

Otro recurso indispensable es [openzeppelin.com](https://openzeppelin.com/contracts/) donde se encuentran estándares 
para ahorrar tiempo en la construcción de contratos. Algo así como plantillas para
facilitarnos algunas tareas a la hora de escribir código.

[Solidity](https://solidity-es.readthedocs.io/es/latest/) es un software que apenas está empezando a tener un creciemiento considerable, 
por lo que en Platzi tenemos un curso especial dirigido a este lenguaje y en donde puedes aprender mucho más de él. 

> Aporte creado por: Luis Enrique Herrera.

# Uso de Wallets: Metamask

Una wallet es una aplicación que te ayuda a interactuar con la blockchain, 
administrar una cuenta y tu llave privada, la cual está encriptada en el 
interior de dicha wallet. Se encuentran en el navegador como extensión, así 
como en aplicaciones móviles e incluso como dispositivos físicos (hardware 
wallets).

Sin embargo, nosotros usaremos Metamask. Se puede descargar como aplicación 
en el móvil, aunque es más utilizada en el navegador. Al entrar en su página 
web (https://metamask.io) para abrir una cuenta, recuerda seguir los pasos 
con mucho cuidado, además de siempre anotar y guardar en un lugar seguro tus 
claves de acceso. Si llegas a extraviarlas, Metamask no será capaz de 
recuperarlas.

Metamask no solo almacena Ethers (la criptodivisa nativa de Ethereum), sino 
también las de otras redes. Cuenta con una interfaz sencilla y con 
funcionalidades bastante completas.

**Una de la que más nos interesa como desarrolladores, es la función de acceso a redes de prueba o testnets**.

> Aporte creado por: Luis Enrique Herrera.

# Actualización sobre testnet en Ethereum 
Las actualizaciones se deben al cambio en la red de Ethereum de Proof of Work
a Proof of Stake. 

- **Ropsten**: Testing PoW -> PoS (deprecated)
- **Goerli**: Testing PoW -> PoS
- **Rinkeby**: Sin cambios (deprecated)
- **Sepolia**: Nueva PoS testnet

Al día de hoy (22/Nov/22), solo hay dos redes para usar como testnet

## Rinkeby -> Goerli 
[Faucet Goerli](https://goerlifaucet.com/)
- Cadena más larga
- Útil para testear aplicaciones complejas
- Más largo de sincronizar

## Ropsten -> Sepolia
[Faucet Sepolia](https://faucet.sepolia.dev/)
- Cadena más corta
- Menos aplicaciones desplegadas
- Más rápido para sincronizar

> Es necesario solicitar tokens de ETH de prueba para las Testnets. 

# Ropsten y Rinkeby 

Al interactuar en la blockchain, se genera un costo. Cada operación requiere 
de un pago, pues al intentar agregar cosas a este tipo de redes, y al haber 
muchos usuarios queriendo hacerlo a la vez, estas se congestionan e implican 
tarifas muchas veces altas por acción dentro de la red.

Por eso, se debe estar muy seguro a la hora de trabajar en las redes 
principales. Entonces, con esto en mente, se desarrollaron las redes de 
prueba. Dos de las más conocidas son Ropsten y Rinkeby.

Ambas tienen en teoría el mismo funcionamiento que la red principal de 
Ethereum, aunque sin el mismo mantenimiento. Dentro de alguna de ellas, 
puedes solicitar ethers de prueba, que son “depositados” de forma inmediata. 
Estos no tienen valor real.

Gracias a esta importante herramienta, podemos trabajar en un entorno similar 
al de una red normal, sin tener que gastar fondos reales en operaciones que 
solo sirven como prueba.

> Aporte creado por: Luis Enrique Herrera.

# [RemixIDE](https://remix.ethereum.org/)

RemixIDE es un IDE (Integrated Development Environment) que se usa desde el 
navegador. Es importante siempre revisar el certificado de seguridad en la 
barra de navegación para evitar entrar a un sitio inseguro.

RemixIDE cuenta con componentes para poder desplegar desde ahí los contratos, 
incluyendo un compilador.

En la interfaz, del lado izquierdo, puedes encontrar el menú de ventanas 
principal para acceder al IDE, al compilador y demás. Desde aquí se hacen las 
configuraciones iniciales, como la versión del compilador, el lenguaje que se 
empleará, la versión de la EVM y otros parámetros.

En la sección de despliegue (deploy), se puede elegir la red que se 
utilizará, y los parámetros específicos del contrato, como el límite de gas, 
que es básicamente una unidad de recurso dentro de la EVM, que se consume al 
desplegar un contrato y varía de acuerdo a las características de cada uno.

RemixIDE también cuenta con su propia terminal, por lo que podremos 
visualizar los datos de salida en el mismo entorno.

> Aporte creado por: Luis Enrique Herrera.

# [Truffle Suite](https://trufflesuite.com/)

Es un entorno de desarrolllo diseñado para facilitar la creación de 
aplicaciones basadas en blockchain. Permite compilar y desplegar contratos 
inteligentes, así como hacer la interfaz de tu aplicación. 

# Instalación
Seguiremos unos cuantos pasos para instalar dos de los componentes de la 
suite: Truffle y Ganache. Para esto, necesitarás ya tener instalado Node.js y 
npm. También te sugerimos usar una extensión para VS Code, se llama 
“Solidity” y su autor es Juan Blanco.

## Truffle
> Truffle te permite administrar tus contratos inteligentes y crear scripts para desplegarlos de forma sencilla y con una estructura clara. 
> Además te pérmite generar test para depurar el código. 

- Ingresa a la página: www.trufflesuite.com
- Abre una terminal con bash (CLI), y en el directorio principal ejecuta el comando: `$ npm update -g`
- Al término del proceso, escribe: `$ npm install -g truffle`
- Para comprobar que todo salió bien y revisar la versión instalada, ejecuta: `$ truffle --version`

## Ganache

> Brinda la opción de tener una blockchain personal para desplegar los contratos y probar las aplicaciones de forma local. 

Para la versión de escritorio:
- - Visita: www.trufflesuite.com/ganache
- - El sitio web reconoce tu SO, solo debes dar clic en el botón de descarga
- - Al término, puedes encontrar el logo de Ganache ya disponible. Abre la aplicación
- - Al elegir “Quickstart”, se abrirá la interfaz general. En la parte superior se encuentra el menú de las ventanas principales: Accounts, Blocks, Transactions, Contracts, Events y Logs

Para la versión de CLI:
- - Ejecuta el comando: `$ npm install -g ganache-cli`
- - Posteriormente, ejecuta el siguiente comando para verificar: `$ ganache-cli --version`
- - Para iniciar el programa, ejecuta: `$ ganache-cli`

Ambas versiones de Ganache sirven para lo mismo, es solamente cuestión de elegir una o incluso usar las dos.

## Drizzle
Es una colección de librerias para Front End que facilita la creación de aplicaciones. 

# Empecemos a entrar en Blockchain

Es momento de emplear estas herramientas para un ejercicio práctico. Recuerda 
que para todo aquello con lo que no estes familiarizado, en Platzi contamos 
con los cursos complementarios que te ayudarán a seguir mejor cualquier 
procedimiento.

Vamos a desplegar un sencillo contrato, empezando con la herramienta Truffle:

- En tu terminal, crea un directorio nuevo, que es donde iniciarás Truffle: `$ 
take hello-blockchain`
- Una vez adentro de la carpeta “hello-blockchain”, ejecuta: `$ truffle init`
- Verás el mensaje “Init succesful, sweet!”, unas líneas más abajo, si todo 
salió bien.
- En la misma carpeta, ejecuta lo siguiente para abrir el directorio dentro 
de VS Code: `$ code .`

Ya estás cada vez más cerca de lograr algo asombroso. Aunque no lo creas, el 
número de personas animándose a probar nuevas tecnologías como esta es 
bastante inferior si lo comparamos al resto. Sigue así 😃

# VS Code y Truffle
Entonces, procederemos a visualizar la carpeta y los archivos que has 
descargado:

- En VS Code, encontrarás las carpetas: “contracts”, “migrations”,“test” y 
“truffle-config.js”
- Dirígete a esta última, y busca la línea “development”. Descomenta esa y 
las siguientes tres líneas hasta la que dice “network_id”. Se encuentran 
cerca de la línea 40
- Después, dirígete a la carpeta “contracts” y crea un nuevo archivo llamado: 
“HelloBlockchain.sol” (sin ningún cambio para que no haya problemas)
- Copia en el editor de este archivo el código que se proporciona en el área 
de recursos, el que se indica para el contrato de Solidity
- Ahora, dirígete a la carpeta “migrations” y crea un archivo llamado 
“2_hello_blockchain.js”
- Copia el código del área de recursos, el que se indica como script de 
despliegue en ese archivo nuevo
- Abre dos ventanas de terminal. Una para Ganache y otra para Truffle
- En una de ellas, ejecuta: `$ ganache-cli` (al final, es importante que arroje 
un mensaje “Listening on 127.0.0.1:8545”)
- En la otra ventana, ejecuta: `$ truffle console --network development`

# Ya falta poco

¡Muy bien!, si ya llegaste a este punto significa que estás por dar tus 
primeros pasos reales como desarrollador blockchain.

Recapitulemos un poco: hasta ahora, hemos instalado un entorno básico y ya 
cuentas con la magia de Truffle para poder hacer contratos de una forma más 
cómoda y rápida. **Al trabajar con esta Suite, usaremos dos terminales para 
poder ver lo que ocurre con mayor facilidad**.

En el último paso dado, la consola deTruffle se debió iniciar, y lo puedes 
verificar al notar que en la otra ventana (donde está corriendo Ganache) 
aparecieron algunas líneas que empiezan con “eth” (no te preocupes si no 
entiendes el código por ahora, eso es lo que aprenderás conforme vayas 
avanzando en este camino).

# Todo trabajo da su recompensa
Ahora seguiremos con unos pasos finales, que son realmente interesantes:

- Escribe el siguiente comando en la consola Truffle: `> 
web3.eth.getBlock(0)` En el output de esa ventana, se puede visualizar la 
información del bloque Génesis o cero En la terminal de Ganache también verás 
el registro de la operación “eth_getBlockByNumber”
- Ejecuta en la consola de Truffle: `> compile`
- Ejecuta en la misma consola: `> migrate`
- Con esto, se muestran las transacciones necesarias para el despliegue y 
también para la creación de nuevos bloques
- En la consola Truffle puedes ver los detalles de cada transacción, como el 
nombre del contrato, el hash, el gas usado, el valor en ETH enviado, etc. Al 
final, se resume el total de las transacciones y el costo total. Casi como un 
ticket de compra común.
- Un bonus: Ejecuta en la consola de Truffle: `> const instance = await 
HelloBlockchain.deployed()` Y finalmente, llama a la función “sayHi” 
ejecutando: `> instance.sayHi.call()` Verás una línea adicional en la consola de 
Ganache que dice “eth_call” y un mensaje que dice en verde “¡Hello, 
Blockchain!” en la consola de Truffle

**!Felicidades!**, has desplegado tu primer contrato inteligente en una 
blockchain local. No ha sido precisamente fácil, pero con la práctica y la 
constancia, estos serán conceptos y procesos que dominarás con rapidez.


## Ejemplos 
El siguiente código de prueba sirve para crear tu primer contrato en Solidity: 
```solidity
// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.4.22 <0.9.0;

contract HelloBlockchain {
    
    function sayHi() public pure returns (string memory) {
        return "!Hello, blockchain!";
    }

}
```

El código para el script de despliegue es: 

```solidity
var helloBlockchain = artifacts.require("./HelloBlockchain.sol");

module.exports = function (deployer) {
	deployer.deploy(helloBlockchain)
}
```

> Aporte creado por: Luis Enrique Herrera

# Hardhat 

Es una de las herramientas más utilizadas para poder desarrollar localmente con solidity.
**Una de las ventajas** es que te permite realizar todo el proceso de desarrollo, fácilmente desde la compilación, despliegue y test, hasta el devops de 
los contratos. Lo mejor es que desarrollas en una red de prueba (Hardhat network) basada en la red de Ethereum, pero con mejoras que te ayudarán a 
identificar errores en los Smart Contracts. 

> Hardhat es una de las herramientas más usadas para el desarrollo blockchain. Desde la compilación, testing, despliegue y el debugging de los contratos. Su red, 
> “Hardhat Network”, es una red de prueba basada en la de Ethereum, aunque ofrece unas ventajas que te ayudarán a identificar errores en tus contratos de una 
> manera más práctica. Esto es algo muy poderoso de la herramienta.

Utiliza npm con su paquete Hardhat, que se apoya de otros plug-ins para aumentar su funcionalidad.

## Iniciemos con Hardhat

- Entra a tu terminal, y en tu directorio principal crea una carpeta nueva: `$ take hola-hardhat`
- Ya adentro en la carpeta, inicia npm: `$ npm init`
- Deja la información por defecto del package.json
- Ahora, ejecuta el siguiente comando para la instalación: `$ npm install --save-dev hardhat`
- Al término de la instalación, ejecuta: `$ npx hardhat`
- Al estar instalado, puedes empezar un nuevo proyecto. Te ofrecerá algunas opciones de arranque rápido. Elige la opción `“Create a basic sample project”` para 
conocer un poco más sobre el ambiente de trabajo.

Después de que termine de descargar los archivos, ábrelos en VS Code con el comando: `$ code .`

Con estas carpetas y archivos, ya cuentas con lo necesario para empezar a trabajar en el desarrollo de contratos. El apartado de “contracts” es en donde 
guardarás los archivos con extensión “.sol”, los que entiende Solidity. Dale una revisada a todo, para que empieces a familiarizarte 😃
Es solo una prueba

Recuerda que esta red es algo que te permite conocer de forma similar cómo se trabaja dentro de la red Ethereum. Hardhat te provee de cuentas con balances de 
prueba para que las uses, pero no debes mezclar estas cuentas para transacciones reales.

Por último, para desplegar un contrato, lo haremos junto con un script que se adjuntó en la descarga:

- Ejecuta: `$ npx hardhat compile`
- Después: `$ npx hardhat run scripts/sample-script.js`
- Verás el mensaje: “Hello, Hardhat!”, además de la dirección donde se encuentra el contrato

Listo, es así de fácil. Es importante recalcar la particular ventaja con Hardhat, pues al hacer un fork de la red de Ethereum, puedes trabajar con
protocolos que ya se encuentran funcionando en la red principal, lo cual te permitirá darte una mejor idea de lo que podrás hacer en el entorno de verdad.

> Aporte creado por: Luis Enrique Herrera.

# Conectando la blockchain con el navegador: Web3.js 

## Cómo conectarnos a la red de Ethereum

**Web3.js es una colección de librerías que interactúan de manera local o remota con tu nodo de Ethereum para una comunicación con la wallet, utilizando 
protocolos como HTTP, IPC o WebSocket.** En RemixIDE puedes encontrar unos ejemplos de archivos web3.js para que los vayas conociendo. Visita el link a la 
documentación que se proporciona en el área de recursos.

Para este ejemplo, usaremos npm y además un protocolo que se llama **JSON RPC**.

### Procedimiento de uso

- Ejecuta en tu terminal: **$ npm install web3**
- Desde OpenZeppelin, copia el estándar ERC20 que se encuentra en la sección de “Contracts” en su página web
- Entra a RemixIDE, y pega el código en un nuevo archivo.
- Revisa en el compilador de Remix que la versión del pragma coincida, además del lenguaje Solidity
- Haz clic en “Compile”, y revisa que no haya errores en la terminal de Remix.
- Ahora, entra a tu cuenta de Metemask, y elige la Red de Prueba de Ropsten. Copia tu direccón en el portapapeles
- Vuelve a Remix, entra a la ventana de “Deploy” y elige en la opción “Environment”: Injected Web3
- Remix reconoce a que red queremos conectarnos (Ropsten) y la cuenta con la que estamos trabajando (la de Metamask)
- Da clic en “Deploy” más abajo

### Final

La transacción en este momento tardará un poco, pues se estará realizando la solicitud para agregarla a la blockchain. Aquí es donde uno de los
mineros validará el proceso. Puedes ver el proceso pendiente en la terminal de RemixIDE.

Al terminar de confirmar la transacción, puedes entrar a tu wallet y comprobar la transacción hecha en el explorador de blockchain por defecto en Metamask.
Solo da clic en la transacción, y en la ventana emergente de “Implementación de contrato” del lado superior derecho al lado de “Detalles”, puedes dar clic
al vínculo que te llevará a Etherscan.

Si el status de la transacción fue exitosa, marcará con un mensaje en verde que así fue. Ya has ingresado tu primera transacción en una blockchain de prueba. 
¡Felicitaciones!

> Aporte creado por: Luis Enrique Herrera.


