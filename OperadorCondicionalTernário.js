// Operador Condicional (Ternário)

//Dependendo da ocndição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

//Exeplos

//Café da manhã top

let pao = true
let queijo = false

const niceBreakfast = pao || queijo ? 'Café Top' : 'Café Ruim'
// pao && queijo = então 'Café Top'
// pao sem queijo = então 'Café Ruim'
// ":" se não
// || operador condicional = OU - ou seja, se os dois valores forem true então vai retornar o resultado true, se os dois forem false, vai retornar valor false
console.log(niceBreakfast)


//Maior de 18

let age = 20
const canDrive = age >= 18 ? 'Can Drive' : "Can't Drive" // a condição tem que ser verdadeira para que então imprima essa mensagem ^=(mensagem acima)
// caso a condição seja falsa, então vai retornar a mensagem negativa (Can't Drive)
//string da mensagem pode ser substituida por "funções, arrays, numbers, objetos, elementos e etc"
console.log(canDrive)