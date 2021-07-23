
/* 

 Concatenando e interpolando variáveis
    
*/
var name = "Guilherme"

//agrupamento de declarações
let age, isHuman

age = 20
isHuman = true

//multiplos argumentos na função
//console.log(name, age, isHuman)

//escrita de texto + variáveis

// concatenando os valores
console.log(name + ' tem ' + age +' anos de idade. É ' +isHuman + ', ele é humano')


//interpolando valores com template literelas or template strings
console.log(`o ${name} tem ${age} anos.`)