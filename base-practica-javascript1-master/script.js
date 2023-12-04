import {barcelona, roma, paris, londres} from './ciudades.js'

// Obetner los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')

// Agregamos evento Click a cada elemento
enlaces.forEach( function(enlace) {
    enlace.addEventListener('click', function(){
        // Remover Active
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        })

        // Agregar Active al enlace seleccionado
        this.classList.add('active')

        // Traer la información del objeto seleccionado
        let contenido = obtenerContenido(this.textContent)

        // Mostrar contenido en el DOM
        tituloElemento.innerHTML = contenido.titulo
        subTituloElemento.innerHTML = contenido.subtitulo
        parrafoElemento.innerHTML = contenido.parrafo 

    })

 
})

// Funcion para traer la información desde ciudades.js
function obtenerContenido(enlace){
    let contenido = {
        'Barcelona' : barcelona,
        'París' : paris,
        'Roma' : roma,
        'Londres' : londres
    }

    // Devolvemos el contenido asociado al enlace seleccionado
    return contenido[enlace]
}