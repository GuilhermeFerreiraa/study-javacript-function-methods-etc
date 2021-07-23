/* 

    Manipulando Arrays



*/

let techs = ["html","css","js"]

// adicionar um item no fim
techs.push("nodejs")
//método push sabe qual o ultimo elemento e como ele faz para colocar um elemento no final 

// adicionar no começo
techs.unshift("sql")
//método unshift adiciona um elemento na primeira posição 

// remover do fim
//techs.pop()
//método usado para remover o ultimo item do elemento 

//remover do começo
//techs.shift()
//Método para remover item do começo do elemento

//slice = elemento "cortar" -- o slice recebe dois argumentos, o primeiro argumento é qual a primeira posição de inicio (que eu quero que ele inicie)
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3))
//vai executar uma função e retornar os valores desejados sem modificar o array, diferente das outras propriedades

//conseguimos retirar através do index, o elemento desejado. Como no exemplo abaixo  
// remover 1 ou mais items em qualquer posição do array
// techs.splice(1,2) utilizei 1 pois é o numero do elemento

// encontrar a posição de um elemento no array
let index = techs.indexOf('nodejs')
techs.splice(index, 1)
console.log(techs)
