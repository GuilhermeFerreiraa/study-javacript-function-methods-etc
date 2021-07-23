/* 

    manipulando strings e números

    Transformar um número quebrado com 2 casas decimais
     e trocar ponto por virugla

*/

let number = 123.123123
console.log(number.toFixed(2).replace(".", ","))
//função replace - substitui um valor por outro
//toFixed é uma função atrelada ao objeto number - método
//um objeto pode ter funções uma atrelada a outra
//trocar ponto por virgula