import React from 'react'

const Footer = () => {
  return (
    <div className="footer" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', textAlign:"left" }}>
        <div>
          <h2>¿Necesitas Ayuda?</h2>
          <p class="footer-links"><a href="#" data-toggle="modal" data-target="#modal-select-country" title="¿Cómo funciona?" alt="¿Cómo funciona?">Mi Cuenta</a></p>
          <p class="footer-links"><a href="#" data-toggle="modal" data-target="#modal-select-country" title="¿Cómo funciona?" alt="¿Cómo funciona?">Preguntas Frecuentes</a></p>
        </div>
          
        <div>
          <h2>Sobre La tienda</h2>
          <p class="footer-links"><a href="#" title="Servicios Especiales" alt="Servicios Especiales">Servicios Especiales</a></p>
          <p class="footer-links"><a href="#" data-toggle="modal" data-target="#modal-select-country" title="¿Cómo funciona?" alt="¿Cómo funciona?">¿Cómo funciona?</a></p>
          <p class="footer-links"><a href="#" title="¿Cómo comprar?" alt="¿Cómo comprar?">¿Cómo comprar?</a></p>
          <p class="footer-links"><a href="#" title="Seguridad" alt="Seguridad">Seguridad</a></p>                
        </div>
          
        <div>
          <h2>Redes Sociales</h2>
          <div class="row">
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p class="footer-links"><a href="" target="_blank" alt="Facebook">Facebook</a></p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p class="footer-links"><a href="" target="_blank" alt="Twitter">Twitter</a></p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p class="footer-links"><a href="" target="_blank" alt="Google+">Instagram</a></p>
            </div>
            <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p class="footer-links"><a href="" target="_blank" alt="Twitter">Pinterest</a></p>
            </div>
          </div>  
        </div>
          
   
    </div>
  )
}

export default Footer
