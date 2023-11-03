console.log('Esto es js')

const coche = [
    {
        nombre: "Bugatti Chiron Super Sport 300+",
        motor: "8.0 litros W16",
        potencia: 1500 ,
        urlImagen: "https://hips.hearstapps.com/hmg-prod/images/bugatti-chiron-super-sport-300-1-1568021423.jpg",
    },
    {
        nombre: "Koenigsegg Jesko",
        motor: "V8 de 5.0 litros",
        potencia: 1600 ,
        urlImagen: "https://www.diariomotor.com/imagenes/2019/03/koenigsegg-jesko-1.jpg",
    },
    {
        nombre: "Hennessey Venom F5",
        motor: "V8 de 6.6 litros",
        potencia: 1800 ,
        urlImagen: "https://cdn.motor1.com/images/mgl/BXQw6v/s1/hennessey-venom-f5-revolution-roadster.jpg",
    },
    {
        nombre: "Rimac C_Two",
        motor: "Eléctrico",
        potencia: 1900 ,
        urlImagen: "https://hips.hearstapps.com/hmg-prod/images/rimac-nevera-1622557482.jpg?crop=0.697xw:0.522xh;0.0543xw,0.275xh&resize=2048:*",
    },
    {
        nombre: "Lamborghini Sian",
        motor: "V12 híbrido",
        potencia: 800 ,
        urlImagen: "https://upload.wikimedia.org/wikipedia/commons/1/18/Lamborghini_Sian_at_IAA_2019_IMG_0332.jpg",
    },
];

function mostrarTarjetas(){
    console.log("Tarjetas")
let tarjetas=``
coche.forEach((element ) => {
    tarjetas += `
        <div class="card m-2 " style="width: 18rem;">
            <img src="${element.urlImagen}" class="card-img-top" alt="${element.nombre}">
            <div class="card-body">
                <h5 class="card-title">${element.nombre}</h5>
                <p class="card-text">${element.motor}</p>
                <p class="card-text">${element.potencia} caballos de potencia</p>
            </div>
        </div>
    `;
});
document.querySelector("#tarjetas").innerHTML = tarjetas
}

mostrarTarjetas()