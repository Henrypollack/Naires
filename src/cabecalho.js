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

        return this.listaCabecalho.join('<br>');
    }
}

// Certifique-se de que a classe Cabecalho está disponível no escopo global
window.Cabecalho = Cabecalho;
