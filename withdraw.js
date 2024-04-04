
document.getElementById("withdraw-btn").addEventListener('click', function(){

    const Withdraw= document.getElementById("withdraw-id")
    const WithdrawId = Withdraw.value 
    const WithdrawIdString = parseFloat(WithdrawId)
    const WithdrawIdNumber = WithdrawIdString

    Withdraw.value = ''
    if(isNaN(WithdrawIdNumber)){
        alert("Enter a Number!!")
    }

    const amountwithdraw = document.getElementById("amount-withdraw")
    const amountwithdrawString = amountwithdraw.innerText
    const amountwithdrawNumber = parseFloat(amountwithdrawString)
    const updateWithdraw = amountwithdrawNumber


    const totalWithdraw = updateWithdraw + WithdrawIdNumber
    amountwithdraw.innerText = totalWithdraw

    const balanceDeposit = document.getElementById("balance-deposit")
    const balance = balanceDeposit.innerText
    const balanceDepositString= parseFloat(balance)


    if(WithdrawIdNumber > balanceDepositString){
        alert("Not Enough Balance!!")
        amountwithdraw.innerText= updateWithdraw
        return;
    }

    const totalBalance = balanceDepositString - WithdrawIdNumber
    balanceDeposit.innerText= totalBalance


})