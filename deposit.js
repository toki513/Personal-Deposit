
document.getElementById("deposit-btn").addEventListener('click',function(){

    const newdeposit = document.getElementById("deposit-id")
    const deposit = newdeposit.value 
    const depositString = parseFloat(deposit)
    const depositNumber = depositString

    const adddeposit = document.getElementById("add-deposit")
    const updateddepositString = adddeposit.innerText
    const updateddepositNumber = parseFloat(updateddepositString)
    
    const totalDeposit= updateddepositNumber + depositNumber
    adddeposit.innerText = totalDeposit
    
    newdeposit.value=''

    const balanceDeposit = document.getElementById("balance-deposit")
    const balanceDepositString = balanceDeposit.innerText
    const balanceDepositNumber = parseFloat(balanceDepositString)
    const finalDeposit = balanceDepositNumber

    const balance = finalDeposit + depositNumber
    balanceDeposit.innerText = balance
})