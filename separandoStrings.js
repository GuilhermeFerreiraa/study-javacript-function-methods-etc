/* 

    Manipulando Strings  e Arrays

    Separe um  texto que contem espaco, em um novo array onde cada texto
    é uma posição do array. Depois disso, transforme o array em um texto e onde
    eram espaços, coloque _

*/

let phrase = 'Meu nome é guilherme'
//.split vai receber como argumento oque eu gostaria de separar nesta frase
//split vai selecionar o argumento que foi dado a ele e remover na execução do código
let MyArray = phrase.split(" ")
let phraseWithUnderscore = MyArray.join("_")
//método join aplicado em um array vai juntar/ agrupar o conteúdo
console.log(phraseWithUnderscore.toLowerCase().toUpperCase())
