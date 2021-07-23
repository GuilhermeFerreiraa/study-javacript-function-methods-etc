//estrutura de repetição

//FOR
//break - para a execução do loop
//continue - pula a execução do momento

for (let i = 10; i > 0; i--){
    if (i == 5){
        continue;
    }
    console.log(i)
}

for (let i = 10; i > 0; i--){
    if (i == 5){
        break;
    }
    console.log(i)
}

//fluxo do loop: ENQUANTO i for maior do que 0, vai decrementar 1 a cada loop, então, IF (se) i for IGUAL == a 5, vai executar o comando CONTINUE e vai pular a execução do momento. 