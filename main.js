let apiKey = 'dc18cd3cd1915f452476ff88c6fefa25'
let urlPrincipal= `https://api.openweathermap.org/data/2.5/weather`
let datoskelvin= 273.14 

document.getElementById("botonBusqueda").addEventListener('click', ()=>{
    const entradaCiudad = document.getElementById('ciudadEntrada').value

    if(entradaCiudad){
        fechCiudad(entradaCiudad)
    } else{
        alert('Ingresar ciudad')
    }             
})
const fechCiudad = (ciudad)=>{
    fetch(`${urlPrincipal}?q=${ciudad}&appid=${apiKey}` )
    .then(response =>{
        if (response.ok) {
            return response.json()
        } else {
            throw new Error('Error: '+ response.status)
        }
    })
    .then(data =>{
        mostraDatosClima(data);
    })
    .catch( error=>{
        console.log(`Error al obtener los dato ${error}`)
    })
}

const mostraDatosClima = (data)=>{
    const fondo = document.getElementById('fondo')
    const containerElemets = document.querySelector('.contenedor')
    const divDatoClima=document.getElementById('datosClima')
    const titutloApp = document.getElementById('titulo__app')
    const botonBusqueda =document.getElementById('botonBusqueda')

    divDatoClima.innerHTML=''

    const nombreCiudad =data.name
    const nombrPais =data.sys.country
    const temperaturaActual = data.main.temp
    const comversiontem = `${Math.floor(temperaturaActual-datoskelvin)}`  
    const infoHumedad = data.main.humidity
    const descripcionTemperatura = data.weather[0].description;
    const icono = data.weather[0].icon;
   

    const tituloCiudad = document.createElement('h3')
    tituloCiudad.textContent=`Ciudad: ${nombreCiudad} Pais: ${nombrPais}`
   

    const valorTemperatura =document.createElement('p')
    valorTemperatura.textContent=`La temperatura actual es: ${comversiontem}ºc`

    const icomImagen = document.createElement('img')
    icomImagen.src = `http://openweathermap.org/img/wn/${icono}.png`
   
    
    const informacionHumed=document.createElement('p')
    informacionHumed.textContent=`Humedad actual: ${infoHumedad}%`


    const parrafoTemperatura = document.createElement('p')
    parrafoTemperatura.textContent=`Descripción del clima : ${descripcionTemperatura}`

    if (comversiontem  > 30) {
        fondo.style.backgroundColor ='#B8902C'
        containerElemets.style.backgroundColor='#EBAB09'
        titutloApp.style.color='white'
        botonBusqueda.style.backgroundColor ='#B8902C'
        
    } else {

        fondo.style.backgroundColor="#2582B8"
        containerElemets.style.backgroundColor='#0095EA'
        titutloApp.style.color='white'
        botonBusqueda.style.backgroundColor="#2582B8"

    }
   

    divDatoClima.appendChild(tituloCiudad)
    divDatoClima.appendChild(valorTemperatura)
    divDatoClima.appendChild(informacionHumed)
    divDatoClima.appendChild(icomImagen)
    divDatoClima.appendChild(parrafoTemperatura)
    document.getElementById('ciudadEntrada').value=''
}

