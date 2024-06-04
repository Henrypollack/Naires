#Dia = int(input("Digite o dia desejado:"))
Dia = 1
mes = 5
ano = 2024
lista = []
i = 0
#DiasTrabalhados = int(input("Digite quantos dias voce trabalhou: "))
local = "*Condor agua verde*"
hrfin = "12:00"
hrini = "06:00"
pix = 41996032398
nomeUs = "Henry"
Area = "Corte de Frutas"
lista.append(f"{local}")
lista.append(f"_{Area}_")
lista.append(f"*Pix:* _{pix}_\n")
lista.append(f"*Nome:* _{nomeUs}_\n")

while i != 7:
  i += 1
  data = f"* {Dia}/{mes}/{ano} - {hrini} as {hrfin}"
  lista.append(data)
  Dia += 1

print(lista)
def salvar_lista_txt(lista, nome_arquivo):
  with open(nome_arquivo, 'w') as arquivo:
    for item in lista:
      arquivo.write(f"{item}\n")

# Exemplo de uso
nome_arquivo = 'datas.txt'

salvar_lista_txt(lista, nome_arquivo)