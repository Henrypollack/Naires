class Cabecalho {
    constructor(nomee) {
        this.nomee = nomee;
        this.listaCabecalho = [];
    }

    inputCabecalho() {
        const nomeUs = document.getElementById('nome').value;
        const pix = document.getElementById('pix').value;
        const local = document.getElementById('local').value;
        const area = document.getElementById('area').value;

        this.listaCabecalho.push(`*Nome:* _${nomeUs}_\n`);
        this.listaCabecalho.push(`*Pix:* _${pix}_\n`);
        this.listaCabecalho.push(`_${local}_\n`);
        this.listaCabecalho.push(`_${area}_`);

        this.local = local;
        this.pix = pix;
        this.nomeUS = nomeUs;
        this.area = area;

        return this.listaCabecalho.join('<br>');
    }
}

function inputCabecalho() {
    const cabecalhoObj = new Cabecalho("nome");
    const resultado = cabecalhoObj.inputCabecalho();
    document.getElementById('resultado').innerHTML = resultado;
}

// Certifique-se de que a função inputCabecalho está disponível no escopo global
window.inputCabecalho = inputCabecalho;