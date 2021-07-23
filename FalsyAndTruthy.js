/* 

    Type Conversion (typecasting) vs Type Coersion

*/

// console.log(Number('9') + 5)

/*

Falsy
Quando um valor é considerado false em contextos onde um booleano é obrigatório (condicionais e loops )

false
0
-0
""
null
undefined
NaN

*/
// é obrigatório que aja um valor do tipo booleano no começo da condicional
// quando colocamos algum valor de outro tipo a não ser booleano, exemplo : number, string
// o javascript vai fazer o Type Conversion - onde vai converter o valor para um tipo false  

console.log( false ? 'verdadeiro' : 'falso')
console.log( 0 ? 'verdadeiro' : 'falso')
console.log( -0 ? 'verdadeiro' : 'falso')
console.log( "" ? 'verdadeiro' : 'falso')
console.log( null ? 'verdadeiro' : 'falso')
console.log( undefined ? 'verdadeiro' : 'falso')
console.log( NaN ? 'verdadeiro' : 'falso')

/*

    TRUTHY
    Quando um valor é considerado true em contextos onde um booleano é obrigatório (condicionais e loops)

    true 
    {}
    []
    1
    3.23
    "0"
    "false"
    -1
    Infinity
    -Infinity
*/

console.log( true ? 'verdadeiro' : 'falso' )
console.log( {} ? 'verdadeiro' : 'falso' )
console.log( [] ? 'verdadeiro' : 'falso' )
console.log( 1 ? 'verdadeiro' : 'falso' )
console.log( 3.23 ? 'verdadeiro' : 'falso' )
console.log( "0" ? 'verdadeiro' : 'falso' )
console.log( "false" ? 'verdadeiro' : 'falso' )
console.log( -1 ? 'verdadeiro' : 'falso' )
console.log( Infinity ? 'verdadeiro' : 'falso' )
console.log( -Infinity ? 'verdadeiro' : 'falso' )