
document.getElementById("deposit-btn").addEventListener('click', function(){
    
    const depositid= document.getElementById("deposit-id")
    const NewdepositString = depositid.value 
    const Newdeposit=parseFloat(NewdepositString)
    console.log(Newdeposit)

    const totalDepositAmount = document.getElementById("add-deposit")
    const PredepositAmountString = totalDepositAmount.innerText
    const PredepositAmount = parseFloat(PredepositAmountString)
    
    const currentDeposit = PredepositAmount + Newdeposit
    totalDepositAmount.innerText = currentDeposit

    const balanceDeposit=document.getElementById("balance-deposit")
    const balanceDepositString = balanceDeposit.innerText
    const NewBalanceDeposit = parseFloat(balanceDepositString)

    const latestBalance = NewBalanceDeposit + Newdeposit 
    balanceDeposit.innerText = latestBalance

    depositid.value='';
    
})


