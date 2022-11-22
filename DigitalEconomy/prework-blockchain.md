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

## (Goerli)[https://goerlifaucet.com/]
- Cadena más larga
- Útil para testear aplicaciones complejas
- Más largo de sincronizar

## (Sepolia)[https://faucet.sepolia.dev/]
- Cadena más corta
- Menos aplicaciones desplegadas
- Más rápido para sincronizar

> Es necesario solicitar tokens de ETH de prueba para las Testnets. 
