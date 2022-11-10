const fr_si = document.getElementById("input-fr-si")    //selecciona las etiquetas de los botones y contenedores
const fr_no = document.getElementById("input-fr-no")  //cambiar cabiar los input
const section_fr = document.querySelector(".section-fr")
const input_cal = document.getElementById("input-cal")

const calculo = () =>{      // funcion para calcular todo, 
    const input_kg = +(document.getElementById("input-kg")).value // obtien el valor de la mas
    const input_nw = +(document.getElementById("input-nw")).value // obtiene el balor de fuersa
    const input_mats = document.getElementById("input-mats").value // llama a las id para trabajar con ellas
    switch(input_mats){ // es como un if 
        case("0"): // que pas si selecciona de NADA
            ue = 0
            ud = 0
            break;
        case ("1"): // que pasa si selecciona madera con madera
            ue = 0.5
            ud = 0.3
            break; 
        case ("2"): // que pasa si se selecciona aceron con hielo 
            ue = 0.03
            ud = 0.02
            break;
        case("3"): // que pas si se selecciona teflon sobre teflon
            ue = 0.04
            ud = 0.04
            break;
        case("4"): // que pasa si se selecciona caucho sobre cemento seco
            ue = 1
            ud = 0.8
            break;
        case("5"): // que pasa si se selecciona Vidrio sobre vidrio
            ue = 0.9
            ud = 0.4
            break;
        case("6"): // que pasa si se selecciona Esquí sobre nieve
            ue = 0.1
            ud = 0.05
            break;
        case("7"): // que pasa si se selecciona Madera sobre cuero
            ue = 0.5
            ud = 0.4
            break;
        case("8"): // que pasa si se selecciona Aluminio sobre acer
            ue = 0.61
            ud = 0.47
            break;
        case("9"): // que pasa si se selecciona Articulaciones humanas
            ue = 0.02
            ud = 0.003
            break;
    } 
    let fx = input_nw
    const gravedad = 9.8;  
    let peso = input_kg * gravedad
    let ffe = ue * peso
    let ffd = ud * peso
    let fuerzaNeta = fx - ffd
    if(ffe > Math.abs(fx)){ // si la fuersa de valo dinamica es mayo al vaolor absoluto de x no se mueve el objeto
        let resNAc = 'Fuerza Aplicada: ' + input_nw + ' Newton\nFuerza de Friccion Estatica: ' + ffe + ' Newton\n El objeto no se mueve porque la friccion es muy grande'
        respuesta(resNAc)
        console.log(resNAc)
        a = 0
    } else if (ffe < Math.abs(fx)){ // si la fuersa de friccion estatiac es mayor a absoluto de fx
        a = fuerzaNeta / input_kg
        let resAc = 'El objeto tiene una aceleracion de ' + a + ' m/s^2 \n(Valor positivo: movimiento -> Valor negativo: <-)'
        respuesta(resAc)
        console.log(resAc)
    }
}

const respuesta = (res) => {
    clearRespuesta();
    let contenedor_res = document.querySelector(".contenedor-res") // seleccion la etiqueta y la guarda en el contenedor
    let respuestaDiv = document.createElement("div"); // crea un div dentro del contenedor
    respuestaDiv.innerHTML = `<h4>Respuesta</h4>
                        <p>${res}</p>`;
    contenedor_res.appendChild(respuestaDiv); // hace que respuestaDiv este dentro del contenedor
}

const clearRespuesta = () =>{ // borra la respuesta y que no pase como e el proyecto donacion
    const respuesta = document.querySelector("#idRespuesta");
    while (respuesta.firstChild) {
        respuesta.removeChild(respuesta.firstChild);
    }
}

const show = (input) =>{ // funcion para mostrar un elemento con el parametro dentro se muestre 
    input.style.display = "flex"
}

const dontShow = (input) =>{// funcion para mostrar un elemento con el parametro dentro no se muestre
    input.style.display = "none"
}
fr_si.addEventListener("click", (e)=>{ // escuchar si hace un si que muestre la lista
    e.preventDefault();
    show(section_fr)  
})
fr_no.addEventListener("click", (e)=>{ // escuchar si hace un si no que muestre la lista
    e.preventDefault();
    dontShow(section_fr)  
})

input_cal.addEventListener("click", (e) =>{ // cunado le haces clik en calcular calcule 
    e.preventDefault();
    calculo();
})