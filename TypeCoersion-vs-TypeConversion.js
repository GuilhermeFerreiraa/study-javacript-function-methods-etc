
/*

Type Conversion (typecasting) //explicitamente altera o dado

vs Type coersion // implicitamente altera o dado

*Alteração de um tipo de dado para outro tipo de dado



*/

console.log('9' + 5)
//neste caso acima o javascript altera o valor de number para string 
// e faz esse processo de Type Coersion, sendo assim, concatenando de
//os dois valores

console.log(Number('9')+5)
//neste caso acima utilizamos uma função que altera o valor da string,
// ou seja o valor de 9 como string, passa pelo processo de TypeConversion
// sendo assim, retornando um resultado de SOMA entre 9 + 5

