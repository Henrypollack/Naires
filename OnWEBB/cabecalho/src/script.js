class Datas {
    constructor(nome) {
        this.nome = nome;
        this.listaDatas = [];
    }

    inputDia(diasTra, hrini, hrfin, diasTrabalhados) {
        const mes = new Date().getMonth() + 1; // Mês atual
        const ano = new Date().getFullYear(); // Ano atual
        
        diasTrabalhados.forEach(dia => {
            this.listaDatas.push(`* ${dia}/${mes}/${ano} - ${hrini} às ${hrfin}`);
        });

        return this.listaDatas;
    }
}

function adicionarData() {
    const nome = "Nome do usuário";
    const diasTra = parseInt(document.getElementById('DiasTra').value);
    const hrini = document.getElementById('hrini').value;
    const hrfin = document.getElementById('hrfin').value;
    const diasTrabalhados = document.getElementById('diasTrabalhados').value.split(',').map(dia => parseInt(dia.trim()));

    const dataObj = new Datas(nome);
    const listaDeDatas = dataObj.inputDia(diasTra, hrini, hrfin, diasTrabalhados);

    document.getElementById('result').innerText = listaDeDatas.join('\n');
}
