
// #Block Statement
//```js
/* vamos iniciar um bloco
{
aqui dentro é um bloco e posso colocar qualquer código

}   aqui fechamos o bloco

o bloco, também criará um novo escopo. Chamamos de `block-scoped`

*/


//var é global e poderá funcionar fora de um escopo de bloco
// var é global e local
// conceito HOISING = ocorre da seguinte maneira

//aqui o Var é elevado para a linha antes do X, ficando como
// var x     -    logo, o valor de x é indefinido, porém a variável é criada
console.log('> existe x antes do bloco', x)

{
    var x = 0
    
}
  
 console.log('> existe x depois do bloco?', x)



 
/* 

##let e const

    //const e let são locais e só funcionam no escopo onde foi criada

    
    */
   
//    console.log('> existe y antes do bloco', y)

let y = 1;

{
     y = 0

    console.log('existe y ', y)
 }

 console.log('existe y depois do bloco?', y)

 {
     const z = 0

     console.log('existe z antes do bloco?', z)
 }
 const z = 0

 console.log('existe z depois do bloco?', z)