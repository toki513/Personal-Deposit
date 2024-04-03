
document.getElementById("submit-btn").addEventListener('click', function(){
    
    const mailid=document.getElementById("mail-id")
    const mail=mailid.value
    console.log(mail)

    const passwordid = document.getElementById("pass-id")
    const password = passwordid.value
    console.log(password)

    if(mail === "tahmid@gmail.com" && password === "hello"){
        window.location.href='bank.html'
    } else{
        alert("Invalid User")
    }
})

