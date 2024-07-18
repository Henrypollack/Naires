document.addEventListener('DOMContentLoaded', function() {
    // Adiciona o primeiro campo de seleção de dias
    adicionarCampoDia();

    // Adiciona o evento de click ao botão de enviar formulário
    document.getElementById('enviarFormularioBtn').addEventListener('click', function() {
        const cabecalhoObj = new Cabecalho("nome");
        const resultadoCabecalho = cabecalhoObj.inputCabecalho();

        const hrini = Array.from(document.querySelectorAll('.hrini')).map(select => select.value);
        const hrfin = Array.from(document.querySelectorAll('.hrfin')).map(select => select.value);
        const diasTra = Array.from(document.querySelectorAll('.diasTrab')).map(select => select.value);

        const dataObj = new Datas("Nome do usuário");
        const listaDeDatas = dataObj.inputDia(diasTra, hrini, hrfin);

        document.getElementById('resultado').innerHTML = resultadoCabecalho + '<br><br>' + listaDeDatas;
    });
});
