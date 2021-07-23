//Function Constructor
/*

    *expressão new
    *criar um novo 
    *this keyword

*/

function Person(name, age, weight) {
    this.name = name //parametro da função
    this.age = age
    this.weight = weight
    this.walk = function () {
        return this.name + " está andando"
    }
    
}
     //sempre vai se referenciar como 'MAYK' que está do lado de fora do escopo, e o 'THIS' dentro do escopo vai se referenciar com o 'MAYK' fora do escopo
    const mayk = new Person("Mayk", 20, 70.4)
    const joao = new Person ("João", 35, 67.3)
    const John = new Person ("John", 22, 88.6)
    const Cleitin = new Person ("Cleitin", 35, 97.5) 
    //por conta do new, essa expressão se torna uma função construtora e retorna para a constante um objeto
    console.log(mayk.walk()) 
    console.log(joao.walk())
    console.log(John.walk())
    console.log(Cleitin.walk())
    //agora o mayk possui uma propriedade chamada NAME, AGE, WEIGHT
    
 // O JS tem diversas funções construtoras, como por exemplo;

 let date = new Date("2021-07-14")
 console.log(date)


//Function Person (name) {
//
//}