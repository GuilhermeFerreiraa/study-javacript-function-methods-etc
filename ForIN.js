//for...in

//vai criar um loop encima de um objeto - pegando as propriedades do objeto

let person ={ 
    name: 'jhon',
    age: 30,
    weight: 88.6
}
// a variavel property vai conter a propriedade - em PERSON
for (let property in person){
    console.log(property)
    console.log(person[property])
}

//método utilizado no FOR IN 