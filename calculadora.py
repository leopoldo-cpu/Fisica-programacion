import matplotlib.pyplot as plt

repeticion=int(input("Cuantas veces queres que se repita el codigo: "))
lista=[]
x=[]
y=[]
for i in range(0,repeticion):
    def variables():
        vel= float(input("ingrese la velocidad en m/s: "))
        while vel<0:
          vel= float(input(" negativo no ingrese la velocidad devuelta en m/s y positivo: "))
          if vel>0:
            break
        cabal=float(input("ingrese la distancia del caballo hasta el auto(en metros): "))
        while cabal<0:
          cabal=float(input(" negativo no ingrese la distancia del caballo hasta el auto devuelta (en metros y positivo): "))
          if cabal>0:
            break
        fren= float(input("ingrese a que velocidad el auto desacelera(expresalo en negativo): "))
        return calculos(vel, cabal, fren) # es una palabra reservada de python que marca el final de la funcion y envia los rsultados a la otra funcion 
    def calculos(vel, cabal, fren):
        while fren>0:
            fren= float(input("no se puede la desaceleracion en numero positivo ponelo en negativo: "))
            if fren<0:
                break
        calc= 0-vel
        tie= calc/fren
        dist= 0+vel*tie+0.5*fren*(tie*tie)
        if dist>cabal:
            print("Te comiste a un caballo")
            c = vel + (1/2)*(0-vel)
            c2 = cabal/c
            acel = (0-vel)/c2
            print("nececitabas frenar a ", acel, "m/s2 para no chocarte")
            print("lo chocaste en ",tie, "segundos")
            lista.append(acel)
            lista.append(tie)

        elif dist<=cabal:
            dist2=cabal-dist
            print("te quedaste a",dist2, "metros de chocar al caballo")
            print("Frenaste en ",tie, "segundos")
            lista.append(dist2)
            lista.append(tie)
        y.append(tie)
        x.append(dist)
    variables()
print("Los resultados fueron",lista)
width=0.1
plt.bar(y,x, width=width, color="red") # solo la barra se va a mover en Y
plt.scatter(y,x, color="blue")
plt.plot(y,x, color="green") # la barra se puede pocisionar 
plt.ylabel("Distancia")
plt.xlabel("Tiempo")
plt.title("Distancia sobre tiempo")
plt.show()