def mostrarMateriales():
    print("Tabla de Materiales")
    print("1. Madera sobre Madera")
    print("2. Acero sobre Hielo")
    print("3. Caucho sobre Teflon")
    print("4. Teflon sobre Teflon")
    print("5. Vidrio sobre Vidrio")
    print("6. Esqui(encerado) sobre Nieve(0°C)")
    print("7. Madera sobre Cuero")
    print("8. Aluminio sobre Acero")
    print("9. Articulaciones Humanas")
    return input("Ingese el Numero del material: ")

masa=int(input("Ingrese la Masa del objeto: "))
fuerza=int(input("Ingrese la fuerza aplicada a el objeto: "))
friccionsn=input("Hay friccion: ")
gravedad=10
ue=0
ud=0
if friccionsn.upper()=="SI":
    opcion=mostrarMateriales()
    if opcion=="1":
        ue=0.5
        ud=0.33
    elif opcion=="2":
        ue=0.02
        ud=0.02
    elif opcion=="3":
        ue=0.04
        ud=0.04
    elif opcion=="4":
        ue=1
        ud=0.8
    elif opcion=="5":
        ue=0.9
        ud=0.4
    elif opcion=="6":
        ue=0.1
        ud=0.05
    elif opcion=="7":
        ue=0.5
        ud=0.4
    elif opcion=="8":
        ue=0.61
        ud=0.47
    elif opcion=="9":
        ue=0.02
        ud=0.003
    else :
        print("ERROR")
        exit()
else:
    ue=0
    ud=0
normal=masa*gravedad
ffd=ud*normal
ffe=ue*normal
if ffe>fuerza:
    print("El objeto no se Mueve")
    print("profe te queremos mucho")
else:
    print("El objeto se Mueve")
    aceleracion=(fuerza-ffd)/masa
    print("La aceleración es", aceleracion, "m/s2")
    print("profe te queremos mucho")  