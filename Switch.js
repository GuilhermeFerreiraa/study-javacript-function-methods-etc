// Switch

// let expression = 'b'
// switch (expression){
//     case 'a':
//         // código para expressão A
//         console.log('a')
//         break
//     case 'b':
//         //código para expressão B
//         console.log('b')
//         break
//     default: 
//     console.log('default')
//         break
//     }
        //o break é importante parar PARAR a aplicação, sem o break o switch vai emitir todos os case e o default


        //CALCULADORA

function calculate(number1, operator, number2){
let result;
switch(operator){
    case '+':
        result = number1 + number2;
        break
    case '-': 
    result = number1 - number2;
        break
    case '*':
        result = number1 * number2;
        break
    case '/':
        result = number1 / number2;    
        break   
    default:
        console.log('Não Implementado')
        break
    }
return result
}

console.log(calculate(4, '+', 4))
console.log(calculate(4, '-', 4))
console.log(calculate(4, '*', 4))
console.log(calculate(4, '/', 4))
console.log(calculate(4, '%', 4))

