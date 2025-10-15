const entero = 42
const decimal = 3.14
console.log(typeof entero, typeof decimal)
// 2. Notacion Cientifica
const cientifico =5e3

// 3. Infinitos y NaN
const infinito = Infinity
const noEsUnNumero = NaN

const resultado = 0.1 + 0.2
console.log(resultado)
console.log(resultado.toFixed(1))
console.log(resultado === 0.3)

// operaciones avanzadas
const raizCuadrada = Math.sqrt(16)
const valorAbsoluto = Math.abs(-7)
const aleatorio = Math.random()
console.log(raizCuadrada)
console.log(valorAbsoluto)
console.log(aleatorio)

const stringValue = '10'
const numberValue = 10
const booleanValue = true
console.log(stringValue + stringValue) //CONCATENA
console.log(stringValue + numberValue)  //CONCATENA
console.log(stringValue + booleanValue) //CONCATENA
console.log(numberValue + stringValue)
console.log(numberValue + numberValue)
console.log(numberValue + booleanValue)
console.log(booleanValue + stringValue)
console.log(booleanValue + numberValue)
console.log(booleanValue + booleanValue)