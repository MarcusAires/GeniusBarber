const agenda = document.getElementById("agenda")

const agendados = JSON.parse(localStorage.getItem("DB"))

agendados.forEach(agendado => {
    agenda.innerHTML+=
    `<tr>
    <td>
    ${agendado.nome}
    </td>
    <td>
    ${agendado.data}
    </td>
    <td>
    ${agendado.fone}
    </td>
    <td>
    ${agendado.servicos}
    </td>
    </tr>
    `
});