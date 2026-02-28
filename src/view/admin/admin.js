const userEmail = sessionStorage.getItem("userEmail")
const userPassword = sessionStorage.getItem("userPassword")

///mock user\\\/////////////////\\\\\\\\\\\\\/////\\\\\\\\\/
const emailAdmin = "admin@gmail.com"
const senhaAdmin = "12345678"
//////\\\\\\////////////\\\\\\\\/////////\\\\\\\//////////

if(!userEmail || !userPassword){
    alert("Acesso negado, faça o login antes")
    window.location.href = "login.html"
}


if(userEmail !== emailAdmin || userPassword !== senhaAdmin){
    alert("Acesso negado, faça o login antes")
    window.location.href = "login.html"
}


/* const agenda = document.getElementById("agenda")
const agendados = JSON.parse(localStorage.getItem("DB"))


const horarios = 
[
    "09:00", "10:00", "11:00", "12:00",
    "13:00", "14:00", "15:00", "16:00",
    "17:00", "18:00"
]

agendados.forEach(agendado => {
    agenda.innerHTML +=
     `  <p>${agendado.data}</p>
        <p>${agendado.horario}</p>
        <p>${agendado.nome}</p>
    `
});


//agendados.forEach(agendado => {
//}); */
