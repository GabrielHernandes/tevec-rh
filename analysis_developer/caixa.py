notas = [50, 20]
money = int(input())

output = []


for nota in notas:
    x = int(money/nota)
    money -= (nota * x)
    output.append(x)

print(str(output[0]) + " nota(s) de R$ 50,00" + " e " + str(output[1]) + " nota(s) de 20,00")