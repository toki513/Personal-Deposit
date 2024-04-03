document.getElementById("withdraw-btn").addEventListener('click', function(){

    const WithdrawId = document.getElementById("withdraw-id")
    const WithdrawIdString = WithdrawId.value
    const newWithdraw = parseFloat(WithdrawIdString)
    
    console.log(newWithdraw)
    WithdrawId.value = '';

    if(isNaN(newWithdraw)){
        alert("Enter a Number")
        return;
    }

    const pamountwithdraw = document.getElementById("amount-withdraw")
    const pamountwithdrawString =pamountwithdraw.innerText
    const pamountwithdrawNumber = parseFloat(pamountwithdrawString)

    const totalWithdraw = newWithdraw + pamountwithdrawNumber
    pamountwithdraw.innerText = totalWithdraw

    const wbalancedeposit = document.getElementById("balance-deposit")
    const wbalancedepositString = wbalancedeposit.innerText
    const wbalancedepositNumber = parseFloat(wbalancedepositString)

    if(newWithdraw > wbalancedepositNumber){
        alert("Not Enough Money!!")
        return;
    }


    const wlastbalance = wbalancedepositNumber - newWithdraw
    wbalancedeposit.innerText = wlastbalance

    
})