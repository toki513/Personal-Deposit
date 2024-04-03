
document.getElementById("deposit-btn").addEventListener('click', function(){
    
    const depositid= document.getElementById("deposit-id")
    const deposit = depositid.value 
    console.log(deposit)

    const totalDepositAmount = document.getElementById("add-deposit")
    const depositAmount = totalDepositAmount.innerText
    totalDepositAmount.innerText = deposit
})