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
                <button class="btn-contactame">Contáctame</button>
            </div>
        </div>
        <div class="imag">
            <img class="cont-img " src="../src/assets/logo blanco sin fondo.png"/>
        </div>
        <div class="btn-hability">
            <button>Mis Habilidades</button>
        </div>
        <div>
            <button>Acerca de mi</button>
        </div>
        <div>
            <button>Mis Proyectos</button>
        </div>
    </div>
  )
}

export default Body