import datetime
import os 
import pprint
dataAtt = datetime.date.today()
mesAt = dataAtt.month
anoAt = dataAtt.year
print(30*"\033[33m=\033[m")
print("""\033[31m
      
      Seja Bem vindo!
  Ao gerador de escala JR

\033[m""")
print(30*"\033[33m=\033[m")   
class cabecalho:
    listaCabecalho = []
    def __init__(self, nomee):
       self.nomee = nomee 
    def inputCabecalho(self):
        nomeUs = str(input("\033[32mDigite o seu nome: \033[m"))
        pix = str(input("\033[32mDigite o seu pix: \033[m"))
        local = str(input("\033[32mDigite qual mercado voce trabalhou: \033[m"))
        area = str(input("\033[32mDigite qual area voce operou (Ex: Mercearia,Deposito,Corte de Frutas): \033[m"))
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
        DiasTra = int(input("\033[32mDigite quantos dias voce trabalhou: \033[m"))
        hrini =str(input("\033[32mDigite a hora que voce entra(ex: 11:00,12:00): \033[m"))
        hrfin = str(input("\033[32mDigite a hora que voce sai(ex: 18:00,19:00): \033[m"))
        mes = mesAt
        ano = anoAt
        i = 0
        while i != DiasTra:
            i += 1 
            dia = int(input("\033[32mDigite o dia trabalhado: \033[m"))
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
print("\n**Lista Cabecalho:**")
if not cabecalho.listaCabecalho:
    print("Lista vazia")
else:
    pprint.pprint(cabecalho.listaCabecalho)

print("\n**Lista Datas:**")
if not datas.listaDatas:
    print("Lista vazia")
else:
    pprint.pprint(datas.listaDatas)
