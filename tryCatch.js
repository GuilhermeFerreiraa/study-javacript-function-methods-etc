// throw  = disparar - lançar

function sayMyName(name){
    if (name === '') {
        throw new Error ("Nome é necessário") // padrão
         //throw  ("Nome é necessário")  outra maneira - NÃO tem problema escrever o code assim 
    }
    console.log(name)
}


// try...catch = pegar  - try = tentar

try {
    sayMyName('Guilherme')
}catch(e){
    console.log(e)
}

console.log('Após o TRY/CATCH')

// error - uncaught == não pego o erro

// se eu fizer um throw sem um try catch para tratar o erro, minha aplicação pode ser travada. porém com o try..catch a aplicação segue sem travamento 