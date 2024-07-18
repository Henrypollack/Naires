class Datas {
    constructor(nome) {
        this.nome = nome;
        this.listaDatas = [];
    }

    inputDia(diasTra) {
        diasTra.forEach(dia => {
            this.listaDatas.push(`* ${dia.dia} - ${dia.hrini} às ${dia.hrfin}`);
        });

        return this.listaDatas;
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const diasTrabalhadosContainer = document.getElementById('diasTrabalhadosContainer');
    const adicionarDataBtn = document.getElementById('adicionarDataBtn');
    const result = document.getElementById('result');

    function adicionarOpcaoDias(selectElement) {
        const mes = new Date().getMonth() + 1; // Mês atual
        const ano = new Date().getFullYear(); // Ano atual
        const diasNoMes = new Date(ano, mes, 0).getDate(); // Último dia do mês

        for (let dia = 1; dia <= diasNoMes; dia++) {
            const diaStr = dia.toString().padStart(2, '0');
            const opcao = document.createElement('option');
            opcao.value = `${diaStr}/${mes.toString().padStart(2, '0')}/${ano}`;
            opcao.text = `${diaStr}/${mes.toString().padStart(2, '0')}/${ano}`;
            selectElement.add(opcao);
        }
    }

    function adicionarCampoDia() {
        const novaLinha = document.createElement('tr');
        novaLinha.className = 'diaTrabalhado';

        const novaTdDia = document.createElement('td');
        const novoSelectDia = document.createElement('select');
        novoSelectDia.className = 'diasTrab';
        novoSelectDia.name = 'diasTrab';
        novaTdDia.appendChild(novoSelectDia);

        const novaTdHrIni = document.createElement('td');
        const novoSelectHrIni = document.createElement('select');
        novoSelectHrIni.className = 'hrIni';
        novoSelectHrIni.name = 'hrIni';
        ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'].forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.text = time;
            novoSelectHrIni.add(option);
        });
        novaTdHrIni.appendChild(novoSelectHrIni);

        const novaTdHrFin = document.createElement('td');
        const novoSelectHrFin = document.createElement('select');
        novoSelectHrFin.className = 'hrFin';
        novoSelectHrFin.name = 'hrFin';
        ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'].forEach(time => {
            const option = document.createElement('option');
            option.value = time;
            option.text = time;
            novoSelectHrFin.add(option);
        });
        novaTdHrFin.appendChild(novoSelectHrFin);

        const novaTdBotoes = document.createElement('td');
        const novoBtn = document.createElement('button');
        novoBtn.type = 'button';
        novoBtn.className = 'adicionarDiaBtn';
        novoBtn.textContent = '+';

        const removerBtn = document.createElement('button');
        removerBtn.type = 'button';
        removerBtn.className = 'removerDiaBtn';
        removerBtn.textContent = '-';

        novaTdBotoes.appendChild(novoBtn);
        novaTdBotoes.appendChild(removerBtn);

        novaLinha.appendChild(novaTdDia);
        novaLinha.appendChild(novaTdHrIni);
        novaLinha.appendChild(novaTdHrFin);
        novaLinha.appendChild(novaTdBotoes);

        diasTrabalhadosContainer.appendChild(novaLinha);

        adicionarOpcaoDias(novoSelectDia);
        novoBtn.addEventListener('click', adicionarCampoDia);
        removerBtn.addEventListener('click', () => novaLinha.remove());
    }

    adicionarCampoDia(); // Adiciona o primeiro campo de seleção de dias

    function adicionarData() {
        const nome = "Nome do usuário";

        const diasTra = Array.from(document.querySelectorAll('.diaTrabalhado')).map(div => ({
            dia: div.querySelector('.diasTrab').value,
            hrini: div.querySelector('.hrIni').value,
            hrfin: div.querySelector('.hrFin').value
        }));

        if (diasTra.some(dia => !dia.dia || !dia.hrini || !dia.hrfin)) {
            alert('Por favor, preencha todos os dias e horários.');
            return;
        }

        const dataObj = new Datas(nome);
        const listaDeDatas = dataObj.inputDia(diasTra);

        result.innerText = listaDeDatas.join('\n');
    }

    adicionarDataBtn.addEventListener('click', adicionarData);
});
