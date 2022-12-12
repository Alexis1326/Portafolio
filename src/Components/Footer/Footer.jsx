import React from 'react'
import "../Style/Footer.css"

const Footer = () => {
    return (
        <div className='footer'>
            <div class="tittle">
                <h2>Contacto</h2>
            </div>
            <div class="icon-footer">
                <div class="linkedin">
                    <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <h5>Alexis Naranjo</h5>
                </div>
                <div class="github">
                    <i class="fa fa-github" aria-hidden="true"></i>
                    <h5>Alexis1326</h5>
                </div>
                <div class="gmail">
                    <i class="fa fa-envelope" aria-hidden="true"></i>
                    <h5>alexis.naranjo1998@gmail.com</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer