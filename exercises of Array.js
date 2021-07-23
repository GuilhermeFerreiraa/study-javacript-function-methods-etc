
/* 

Arrays exercise
    
*/
//const is attributed three values, to access each value, is necessary put on the name of variable like 'animals' and the number of propriety like '[0]'
//ex: console.log(animals[0]) 
const  animals = [
    'Lion', //propriety number 0
    'Monkey', //propriety number 1
    {
        name: 'cat',
        age: 3
    }
]

console.log(`${animals[0]} and ${animals[1]}`)

//to show how many propriety has on the object 
console.log(animals.length)

//bringing the propriety and their attributes
console.log(`${animals[2].name} ${animals[2].age}`)

console.log(animals)