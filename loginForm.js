let userInput=document.getElementById("username");
let passwordInput=document.getElementById("password");
let btnEvent=document.getElementById("logIN");

const inputData="anilBabu";
const passwordData="Srinu@9.";

btnEvent.onclick=function() {
    
    if(inputData  && passwordData=="")
    alert("enter valid username and password")

    else{
       if(userInput.value==inputData && passwordInput.value==passwordData)
       
    window.location.href = 'loginForm.html'

       else{
        alert("enter valid details")
       }
    }

}