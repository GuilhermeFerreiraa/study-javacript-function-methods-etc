
/* 

    FUNCTIONS

    *argumentos e parametros
*/

// function expression 
//function anonymmous

//parametros da função (parameters)
const sum = function(number1, number2) {
    total = number1 + number2 
    return total //atribuindo o return a função retorna o valor dentro da função
}

let number1 = 34
let number2 = 25

console.log(`o número 1 é ${number1}`)
console.log(`o número 2 é ${number2}`)
console.log(`a soma é ${sum(number1, number2)}`)


sum(2, 3) //arguments - argumentos da função executada

//toda função SEMPRE RETONRA alguma coisa
// Quando uma função não possui o return ela não tem nada para retornar, logo, ela retorna um valor undefined




