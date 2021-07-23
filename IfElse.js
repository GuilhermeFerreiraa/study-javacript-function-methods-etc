// If...Else

// o uso do else não é obrigatório em algumas ocasioes, nesta por exemplo é somente para emitir um alerta
let temperature = 36.9
let HighTemperature = temperature >= 37.5
let mediumTemperature = temperature < 37.5 && temperature >= 37

if(HighTemperature){
    console.log('febre alta')
} else if(MediumTemperature){
    console.log('Febre moderada')
}else{
    console.log('Saudável')
}

// dependendo da aplicação que desejamos fazer, podemos utilizar quantos if e else forem nececssários, para chegar a um resultado 

/*
    if (CONDICIONAL){
        RESPOSTA DA CONDICIONAL - UTILIZEI POR EXEMPLO O CONSOLE.LOG(CONDICIONAL) PARA IMPRIMIR O RESULTADO DA CONDICIONAL  
    } ELSE {
        AQUI VAI IMPRIMIR SOMENTE O VALOR OPOSTO DA CONDICIONAL, PORTANTO SE O RESULTADO NAO ENTRAR NO IF ENTÃO SERÁ ENCAMINHADA PARA O ELSE E IMPRIMIRÁ UM VALOR CORRESPONDENTE 
    }
*/

// OBS: a condicional no if e else só aceita valores do tipo boolean, portanto, somente verdadeiro ou falso

// DICA NUMERO 1 - utilizar chaves de blocos
// DICA NUMERO 2 - utilizar nomes de variáveis que façam sentido

