const forms = document.getElementById("forms");
const data = document.getElementById("input-data")
const nome = document.getElementById("nome")
const telefone = document.getElementById("telefone")
const confirmar = document.getElementById("confirmar");
const servicos = document.getElementById("servicos")
const horario = document.getElementById("horario")

/// Captura a data atual
const hoje = new Date();

// Extrai o ano, mês e dia, garantindo que mês e dia tenham dois dígitos (ex: '02' em vez de '2')
const ano = hoje.getFullYear();
const mes = String(hoje.getMonth() + 1).padStart(2, '0'); // Os meses começam no 0 em JS, por isso o +1
const dia = String(hoje.getDate()).padStart(2, '0');

// Monta a string no formato exigido pelo HTML (AAAA-MM-DD)
const hojeFormatado = `${ano}-${mes}-${dia}`;

// Encontra o input no HTML pelo ID e define o valor mínimo
data.min = hojeFormatado
data.value = hojeFormatado

// Criação do DB provisório para testes de interface da aba login
/// substituir esse bloco ou remover para adição do DB real
if (!localStorage.getItem("DB")) {

    const modeloAgendamento =
        [
            {
                data: "00/00/0000",
                horario:"08:00",
                nome: "John Doe",
                fone: "99-99999-9999",
                servicos: "servico1"
            }
        ]
    localStorage.setItem("DB", JSON.stringify(modeloAgendamento))
}
/////////////\\\\\\\\\\\\\////////////\\\\\\\\\\///////\\\\

forms.addEventListener("submit", (e) => {
    e.preventDefault()

    const inData = data.value
    const inNome = nome.value
    const inFone = telefone.value
    const inServicos = servicos.value
    const inHorario = horario.value


    confirmar.style.cursor = "wait"
    confirmar.value = "Realizando agendamento... aguarde"
    confirmar.disabled = true

    const novoAgendamento =

    {
        data: inData,
        nome: inNome,
        fone: inFone,
        servicos: inServicos,
        horario: inHorario
    }

    // Puxa o array com os objetos do localstorage e adiciona mais um objeto depois transforma tudo em json de novo e manda de volta pro localestorage
    // substituir esse bloco por conexão de banco de dados 
    const DB = JSON.parse(localStorage.getItem("DB"))
    console.log("banco de dados antes do Push" + DB)
    DB.push(novoAgendamento)
    console.log("Banco de dados após o push" + DB)
    localStorage.setItem("DB", JSON.stringify(DB))

    //////////\\\\\\\\\\\\//////////\\\\\\\\\\////////\\\\\\


    //reseta o botão, o forms e a data
    alert("Agendamento realizado com sucesso");
    confirmar.style.cursor = "pointer"
    confirmar.value = "Confirmar agendamento";
    confirmar.disabled = false;
    forms.reset();
    data.value = hojeFormatado;
});