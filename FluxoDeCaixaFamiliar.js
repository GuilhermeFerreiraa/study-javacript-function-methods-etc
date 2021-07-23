/*
    ### Sistema de Gasto Familiar

    Crie um objeto que possuirá 2 propriedades, ambas do tipo
    array: 
    *receitas: []
    *despesas: []

    Agora, crie uma função que irá calcular o total de receitas
    e despesas e irá mostrar uma mensagem se a família está com 
    saldo positivo ou negativo, seguindo do valor do saldo  



*/

let family = {
    incomes: [100,3200, 245.50, 360.45],
    expenses: [234.21, 123.12, 454.35, 1555.00, 2000]
}
//soma dos valores
function sum(array){
    let total = 0;
    for(let value of array)
    total += value
    
    return total
}


function calculateBalance() {
    const calculateIncomes = sum (family.incomes)
    const calculateExpenses = sum (family.expenses)

    const total = calculateIncomes - calculateExpenses
    
    const itsOk = total >= 0
    let balanceText = 'Negativo'
    
    if (itsOk){
        balanceText = "positivo"
    }
    console.log(`Seu saldo é ${balanceText}: R$${total.toFixed(2)}`)
}

calculateBalance()