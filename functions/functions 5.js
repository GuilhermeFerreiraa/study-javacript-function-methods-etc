//function hoising

sayMyName()

    function sayMyName() {
    console.log('Gui')
    
}

//a função é atribuida automaticamente acima do valor declarado acima, ou seja como o JS lê o código:
// function sayMyName() {
//     console.log('Gui')
// }
// sayMyName()