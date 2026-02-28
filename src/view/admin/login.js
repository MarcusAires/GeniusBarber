////inputs do forms de login\\\\
const inputForm = document.getElementById("form-login-admin")
const inputEmail = document.getElementById("email")
const inputSenha = document.getElementById("pwd")
////////////\\\\\\\\\\\////////\\\\\\\\///////\\\\\\\\\/////


///mock user\\\/////////////////\\\\\\\\\\\\\/////\\\\\\\\\/
const emailAdmin = "admin@gmail.com"
const senhaAdmin = "1234"
//////\\\\\\////////////\\\\\\\\/////////\\\\\\\//////////


inputForm.addEventListener("submit",(e)=>{
    e.preventDefault()

    if(inputEmail.value === emailAdmin & inputSenha.value === senhaAdmin){
        sessionStorage.setItem(JSON.stringify(inputEmail.value))
        sessionStorage.setItem(JSON.stringify(inputSenha.value))
    }
    else{
        alert("Usuário ou senha inválidos")
        inputForm.reset()
        sessionStorage.clear()
    }

}
)