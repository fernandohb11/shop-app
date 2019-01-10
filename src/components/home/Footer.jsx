import React from 'react'

const Footer = () => {
  return (
    <div className="footer" style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', textAlign:"left" }}>
        <div>
          <h2>¿Necesitas Ayuda?</h2>
          <p className="footer-links">Mi Cuenta</p>
          <p className="footer-links">Preguntas Frecuentes</p>
        </div>
          
        <div>
          <h2>Sobre La tienda</h2>
          <p className="footer-links">Servicios Especiales</p>
          <p className="footer-links">¿Cómo funciona?</p>
          <p className="footer-links">¿Cómo comprar?</p>
          <p className="footer-links">Seguridad</p>               
        </div>
          
        <div>
          <h2>Redes Sociales</h2>
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="footer-links">Facebook</p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="footer-links">Twitter</p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="footer-links">Instagram</p>
            </div>
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <p className="footer-links">Pinterest</p>
            </div>
          </div>  
        </div>
          
   
    </div>
  )
}

export default Footer
