//callback function

function sayMyName(name) {
    console.log('antes de executar a função callback')
    name()
    console.log('depois de executar a callback')
}
sayMyName(
    () => {
        console.log('estou em uma callback')
    }
)
//O callback é uma função que passa como parametro para outra função
//callback = chama de volta - chamar outra função de volta