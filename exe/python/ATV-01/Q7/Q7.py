def conversorCF(c):
    f = (9/5)*c + 32
    return f

c = float(input("Digite a temperatura em graus Celsius: "))

print(f' {c} graus Celsius equivalem a {conversorCF(c):.2f} graus Fahrenheit ')
