class Cabecalho {
  static listaCabecalho = [];

  constructor(nomee) {
      this.nomee = nomee;
  }

  inputCabecalho() {
      const nomeUs = prompt("Digite o seu nome:");
      const pix = prompt("Digite o seu pix:");
      const local = prompt("Digite qual mercado voce trabalhou:");
      const area = prompt("Digite qual area voce operou (Ex: Mercearia,Deposito,Corte de Frutas):");

      Cabecalho.listaCabecalho.push(`*Nome:* _${nomeUs}_\n`);
      Cabecalho.listaCabecalho.push(`*Pix:* _${pix}_\n`);
      Cabecalho.listaCabecalho.push(`_${local}_\n`);
      Cabecalho.listaCabecalho.push(`_${area}_`);

      this.local = local;
      this.pix = pix;
      this.nomeUs = nomeUs;
      this.area = area;
      
      return Cabecalho.listaCabecalho;
  }
}

// Exemplo de uso:
const meuCabecalho = new Cabecalho("Exemplo");
console.log(meuCabecalho.inputCabecalho());

