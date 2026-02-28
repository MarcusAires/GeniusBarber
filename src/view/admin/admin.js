const agenda = document.getElementById("agenda")
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
//});