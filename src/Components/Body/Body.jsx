import React from 'react'
import "../Style/Body.css"

const Body = () => {
  return (
    <div className='body'>
        <div class="block-top">
            <div>
                <h1>Alexis Naranjo Vargas</h1>
                <h3>Desarrollador full stack</h3>
            </div>
            <div class="div-btn">
                <button class="btn-contactame"> Contáctame
                    <span></span>
                </button>
            </div>
        </div>
        <div class="block-button">
            <div class="imag">
                <img class="cont-img " src="../src/assets/logo blanco sin fondo.png"/>
            </div>
            <div class="div-btn">
                <button class="btn-HMP">Mis Habilidades</button>
            </div>
            <div class="div-btn">
                <button class="btn-HMP">Acerca de mi</button>
            </div>
            <div class="div-btn">
                <button class="btn-HMP">Mis Proyectos</button>
            </div>
        </div>
        
    </div>
  )
}

export default Body