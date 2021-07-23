/*

    ### Transformar notas escolares

    Crie um algoritimo que transforme as notas do sistemas
    numérico para sistema de notas em caracteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89   - B
    * entre 70 - 79   - C
    * entre 60 - 69   - D
    * menor que 60    - E

*/

//pegar as notas
//somar as notas
//transformar as notas de numbers em strings


function getNotes(score) {
    let ScoreA = score >= 90 && score <= 100
    let ScoreB = score >= 80 && score <= 89
    let ScoreC = score >= 70 && score <= 79
    let ScoreD = score >= 60 && score <= 69
    let ScoreE = score < 60  && score >= 0
    
    let scoreFinal;

if (ScoreA){  
    scoreFinal = 'A'
}else if (ScoreB){  
    scoreFinal = 'B'
}else if(ScoreC){  
    scoreFinal = 'C'
}else if(ScoreD){  
    scoreFinal = 'D'
}else if(ScoreE){  
    scoreFinal = 'E'
}else{
    scoreFinal = 'NOTA INVÁLIDA'
}
return scoreFinal
}

console.log(getNotes(101))
console.log(getNotes(-1))
console.log(getNotes(0))
console.log(getNotes(1))
console.log(getNotes(45))
console.log(getNotes(60))
console.log(getNotes(61))
console.log(getNotes(75))
console.log(getNotes(85))
console.log(getNotes(95))