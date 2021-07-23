/* 

    Manipulando Strings  e Arrays

    Verificar se o texto contém a palavra amor

*/
let phrase = "eu quero viver !"

console.log(phrase.includes("Amor"))
console.log(phrase.includes("eu quero viver !"))
//método includes vai verificar se tem o argumento passado para ele na variável
//ou seja, neste caso ele está buscando no PHRASE a palavra amor, e se caso
//ele não encontrar, vai retornar um valor booleano (true / false)
//o includes também é case sensitive, portanto, precisa estar escrito perfeitamente 
//como foi descrito anteriormente o argumento a ser consultado.
// por exemplo

console.log(phrase.includes("eu queru"))
//neste caso retorna um valor false, simplesmente por conta do erro na escrita.
