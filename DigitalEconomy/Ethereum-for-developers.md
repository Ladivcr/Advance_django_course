# ¿Qué es Ethereum? 
Ethereum es la plataforma descentralizada que se basa en la tecnología blockchain que trajo consigo Bitcoin. Es una plataforma para ejecutar contratos inteligentes
(smart contracts) a través de una computadora virtual (EVM) y utiliza una criptomoneda llamada Ether (ETH) para medir y restringir los costos de ejecución.

La red Ethereum comparte muchas cosas con la red de Bitcoin, siendo una de ellas que ambas son redes open blockchain.
Esto significa que cualquier persona puede participar en la creación e interacción dentro de ellas, mientras tenga un dispositivo adecuado con acceso a internet,
por lo que se considera que son resilientes a la censura.

## ¿Para qué sirve Ethereum? 
El propósito de su creación, según sus propios autores, es ser una herramienta para poder brindar un ambiente de trabajo determinado y seguro donde se puedan programar
aplicaciones descentralizadas. Esto sin necesidad de construir la infraestructura base de algoritmos de consenso y redes de persona a persona para cada nueva aplicación.
Básicamente, facilitar el desarrollo de proyectos que aprovechen la tecnología blockchain.

La implementación de los smart contracts es su característica más popular (fue la primera red en concebirlos) y la idea principal para hacer de esta red algo más
interesante que la propuesta original de Bitcoin, al permitir el desarrollo técnico de aplicaciones con su propio lenguaje de programación
“orientado a contratos”: Solidity. Técnicamente, **esto se le conoce como “turing completo”**, algo de lo que la red de Bitcoin carece.

### Ethereum vs. Bitcoin 
- Ethereum -> Turing Completo: La moneda cumple una función para un objetivo más amplio
- Bitcoin -> Turing incompleto: Limitado a ser un sistema monetario superseguro

## Su historia desde el comienzo 
- Publicación del White Paper por Vitalik Buterin (2013)
- Publicación del Yellow Paper por el Dr. Gavin Wood, co-fundador y CTO de Ethereum (2014)
- Presale de la ICO de Ethereum (Julio 2014)
- Frontier, el despliegue de la primera etapa de cuatro fases de desarrollo programadas (30 de julio de 2014)

Desde su planificación, los creadores decidieron que Ethereum tendría una ruta de desarrollo progresiva hasta una transición final, donde se cambiaría a
un consenso distinto al de Bitcoin. Las versiones principales antes de su versión final fueron las siguientes:
- Frontier (2014)
- Homestead (2016)
- Metropolis (2017)
- Serenity (Ethereum 2.0)

## Ethereum 2.0 
- Transición de PoW a PoS
- Beacon Chain (dic 2020)
- PoS validators
- Shard Chains

Se espera mucho de esta innovadora propuesta, y a pesar de los obstáculos, se cree que será una de las redes que, junto con Bitcoin,
cambiarán la forma en la que interactuamos y hacemos transacciones de todo tipo dentro de Internet.

> Contribución creada con los aportes de: Luis E. Herrera

# Componentes de Ethereum 

1. **Red P2P:** Es la red que permite la comunicación y envío de datos entre un usuario y otro sin necesidad de un intermediario.
 Aunque en realidad es más complejo que eso, se puede entender que los canales dentro de una red P2P son compartidos y anónimos, es decir, los usuarios no tienen
 que conocerse entre ellos para poder hacer uso de estos canales, y no hay un control respecto a qué datos son tomados como prioridad o con algún privilegio (o censura).

2. **Algoritmo de consenso (consenso de Nakamoto):** Fue el mismo de Bitcoin hasta la aparición de Ethereum 2.0, y no es más que la forma en la que se acordó cómo
 se actualizaría la información dentro de la red, de manera que se evitara la inserción de datos de manera arbitraria y creando un sistema protegido contra los intentos
 de corrupción.
 
3. **Ether:** Es la criptomoneda nativa del proyecto. Sirve para muchas cosas, además de tener un valor como lo tiene Bitcoin. En ella se basan todas las
  operaciones que tienen lugar dentro de la red, basadas en transacciones que se realizan con ayuda de otros instrumentos.
  
  > Es importante diferenciar entre Ether y Ethereum. Ether es la moneda y Ethereum es la red.
  
4. **Ethereum Virtual Machine (EVM):**  Es el software creado para servir como una computadora que se aloja en la nube, con el propósito de procesar los
   programas que funcionan en la propia red.

5. **Algoritmo criptográfico de seguridad (Ethash):** Es la herramienta creada a partir de una aplicación matemática que brinda una protección a todo el sistema, 
sin la cual, la seguridad de una red incorruptible no existiría.

6. **Clientes (Gethm Parity):** Son los paquetes de conexión que permiten funcionar como un nodo que aloje la información de la red, así como interactuar con ella.

## Conceptos relevantes de Ethereum

- **Clientes/Nodos:**  Los clientes son los encargados de empaquetar el sistema sobre el cual se puede ejecutar un nodo en la red BlockChain.
 Cuando instalas en tu computador este cliente, automáticamente te conviertes en un nodo participante en la red de Ethereum.

- **Walletes:** Las wallets o billeteras son aplicaciones que nos permiten administrar nuestras cuentas de Ethereum o de cualquier otra red, para poder
 interactuar con otras personas que también sean parte de esta red. Además de controlar nuestros fondos y activos.

- **Smart Contracs:** Son los programas que nos permiten comunicarnos con la blockchain a partir de ciertas condiciones especificadas dentro del contrato inteligente.
 Estos contratos se ejecutan dentro de la EVM para ser analizados y posteriormente implementados en la blockchain

- **Web3:** Es una nueva web descentralizada sobre la cual no necesariamente va a existir un ente central, sino que al ser una red descentralizada o P2P los usuarios
 son los encargados tomar decisiones autónomas sin necesidad de recurrir o de pedir información a un ente central.

## La base de Ethereum 

Para poder entender cómo es que se interactúa con esta blockchain, primero hay que saber que todo se maneja a través de transacciones.
Aquí es donde entra el Ether, así como los componentes que regulan su administración y el uso de la red para una correcta distribución de los datos,
evitando la congestión del tráfico en las transacciones. Para ello, es necesario conocer el concepto de “gas”.

> Contribución creada con los aportes de: Luis E. Herrera y Johan Muñoz

# La moneda ETH y el Gas

Ether, también conocida como ETH, es la moneda nativa de la red de Ethereum. Sirve para hacer transferencias de valor,
pagar a los mineros, correr programas y como mecanismo de seguridad contra potenciales errores en la máquina virtual
EVM (Ethereum Virtual Machine) a través del GAS.

## El gas en Ethereum 

La unidad de medición principal para el Ether se llama “Gwei” en honor a un ingeniero informático chino, Wei Dai,
quien contribuyó con aportes en el área de la criptografía dedicada a las criptomonedas. Esta unidad se divide a
su vez en “wei”, la unidad mínima, de la cual se necesitan 10^18 para completar un Ether.

Entonces, otro concepto a conocer bien es el de “gas”, que se refiere a una cantidad de Ether en dichas unidades
para poder interactuar con la red de Ethereum, y que como su nombre alude, sirva como gasolina para alimentar a la EVM. 
En otras palabras, se debe pagar por cada transacción que se conecte a la blockchain, una pequeña tarifa para hacer
uso de esta máquina virtual.

Esto es necesario, ya que la EVM, al tratarse de una computadora en términos prácticos, es susceptible a los percances
que podría ocasionar el código, como bucles infinitos y bugs que afecten su correcto funcionamiento.
Así, con el gas se puede asegurar un proceso delimitado por su duración, y de esta forma evitar que este tipo
de fallas perdure sin control alguno.

> Contribución creada con los aportes de: Luis E. Herrera.

