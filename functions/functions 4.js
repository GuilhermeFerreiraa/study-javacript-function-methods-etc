//Function Scope
let subject = 'create video'

function createThink(subject) {
    subject = 'study'
    return subject
}

console.log(subject) //primeiro roda o escopo do let
console.log(createThink(subject)) //posteriormente roda o escopo da função, com o parametro já criado (PORÉM NÃO SUBSTITUI O PARAMETRO DA VARIAVEL LET)

//o escopo da função sobressai ao escopo do 'let subject' quando não está no parametro da função. Portanto com o parametro do let na função (subject), a função apenas recria um novo parametro para a SUBJECT e retorna a mesma no fim da função.   