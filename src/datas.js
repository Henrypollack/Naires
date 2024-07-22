class Datas {
    constructor(nome) {
        this.nome = nome;
        this.listaDatas = [];
    }

    inputDia(diasTra, hrini, hrfin) {
        diasTra.forEach((dia, index) => {
            this.listaDatas.push(`* ${dia} - ${hrini[index]} às ${hrfin[index]}`);
        });
        return this.listaDatas.join('<br>');
    }
}

function adicionarCampoDia() {
    const tabelaBody = document.getElementById('diasTrabalhadosContainer');

    const novaLinha = tabelaBody.insertRow();

    const novoSelect = document.createElement('select');
    novoSelect.className = 'diasTrab';
    novoSelect.name = 'diasTrab';

    const hriniSelect = document.createElement('select');
    hriniSelect.className = 'hrini';
    hriniSelect.name = 'hrini';

    const hrfinSelect = document.createElement('select');
    hrfinSelect.className = 'hrfin';
    hrfinSelect.name = 'hrfin';

    adicionarOpcaoDias(novoSelect);
    adicionarOpcaoHoras(hriniSelect);
    adicionarOpcaoHoras(hrfinSelect);

    let celula = novaLinha.insertCell();
    celula.appendChild(novoSelect);

    celula = novaLinha.insertCell();
    celula.appendChild(hriniSelect);

    celula = novaLinha.insertCell();
    celula.appendChild(hrfinSelect);

    celula = novaLinha.insertCell();
    const adicionarBtn = document.createElement('button');
    adicionarBtn.type = 'button';
    adicionarBtn.className = 'adicionarDiaBtn';
    adicionarBtn.textContent = '+';
    adicionarBtn.addEventListener('click', adicionarCampoDia);
    celula.appendChild(adicionarBtn);

    const removerBtn = document.createElement('button');
    removerBtn.type = 'button';
    removerBtn.className = 'removerDiaBtn';
    removerBtn.textContent = '-';
    removerBtn.addEventListener('click', () => novaLinha.remove());
    celula.appendChild(removerBtn);
}

function adicionarOpcaoDias(selectElement) {
    const mes = new Date().getMonth() + 1;
    const ano = new Date().getFullYear();
    const diasNoMes = new Date(ano, mes, 0).getDate();

    for (let dia = 1; dia <= diasNoMes; dia++) {
        const diaStr = dia.toString().padStart(2, '0');
        const opcao = document.createElement('option');
        opcao.value = `${diaStr}/${mes.toString().padStart(2, '0')}/${ano}`;
        opcao.text = `${diaStr}/${mes.toString().padStart(2, '0')}/${ano}`;
        selectElement.add(opcao);
    }
}

function adicionarOpcaoHoras(selectElement) {
    const horas = ["08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00"];
    horas.forEach(hora => {
        const opcao = document.createElement('option');
        opcao.value = hora;
        opcao.text = hora;
        selectElement.add(opcao);
    });
}

// Certifique-se de que a classe Datas e a função adicionarCampoDia estão disponíveis no escopo global
window.Datas = Datas;
window.adicionarCampoDia = adicionarCampoDia;
