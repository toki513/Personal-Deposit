
document.getElementById("submit-btn").addEventListener('click', function(){
    const mailId = document.getElementById("mail-id")
    const mail = mailId.value 

    const passId = document.getElementById("pass-id")
    const pass = passId.value

    if(mail === 'tahmid@gmail.com' && pass === "hello"){
        window.location.href="bank.html"
    }else{
        alert("Invalid User")
    }
})