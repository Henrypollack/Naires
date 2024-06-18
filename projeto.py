import datetime
import os 
dataAtt = datetime.date.today()
mesAt = dataAtt.month
anoAt = dataAtt.year
        
class cabecalho:
    listaCabecalho = []
    def __init__(self, nomee):
       self.nomee = nomee 
    def inputCabecalho(self):
        nomeUs = str(input("Digite o seu nome: "))
        pix = str(input("Digite o seu pix: "))
        local = str(input("Digite qual mercado voce trabalhou: "))
        area = str(input("Digite qual area voce operou (Ex: Mercearia,Deposito,Corte de Frutas): "))
        cabecalho.listaCabecalho.append(f"*Nome:* _{nomeUs}_\n")
        cabecalho.listaCabecalho.append(f"*Pix:* _{pix}_\n")                                
        cabecalho.listaCabecalho.append(f"{local}\n")
        cabecalho.listaCabecalho.append(f"_{area}_")
         
        self.local = local
        self.pix = pix
        self.nomeUS = nomeUs
        self.area = area
        return cabecalho.listaCabecalho
        
class datas:
    listaDatas =[]
    
    def __init__(self, nome):
        
        self.nome = nome
    def inputDia(self):
        DiasTra = int(input("Digite quantos dias voce trabalhou: "))
        hrini =str(input("Digite a hora que voce entra(ex: 11:00,12:00): "))
        hrfin = str(input("Digite a hora que voce sai(ex: 18:00,19:00): "))
        mes = mesAt
        ano = anoAt
        i = 0
        while i != DiasTra:
            i += 1 
            dia = int(input("Digite o dia: "))
            datas.listaDatas.append(f"* {dia}/{mes}/{ano} - {hrini} as {hrfin}")
        self.DiasTra = DiasTra
        self.dia = dia
        self.mes = mes
        self.ano = ano
        self.hrini = hrini
        self.hrfin = hrfin
        return datas.listaDatas

cabecalho = cabecalho("cabecalho")
datas = datas("datas")
cabecalho.inputCabecalho()
datas.inputDia()
nomeDoTXT = "PadraoJR.txt"
with open (nomeDoTXT,"w") as arquivo:
    for linha in cabecalho.listaCabecalho:
        arquivo.write(linha)
    arquivo.write("\n")
    for linha in datas.listaDatas:
        arquivo.write(linha + "\n")

