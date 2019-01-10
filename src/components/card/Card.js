import React, { Component } from 'react';
import {Card} from 'antd';
import homeimg1 from '../../img/home1.jpg'
import homeimg2 from '../../img/home2.jpg'
import homeimg3 from '../../img/home3.jpg'
import homeimg4 from '../../img/home4.jpg'
import homeimg5 from '../../img/home5.jpg'
import homeimg6 from '../../img/home6.jpg'

class Tarjeta extends Component {


  render() {
     return (
      <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px'}}>
         <Card title="Rhoea Studio" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} alt='1' src={homeimg2}/>}>
         Calzado personalizado y en edición limitada. #hechoenMéxico <span> 🇲🇽 </span>rhoeastudio@gmail.com
          </Card>
          <Card title="Ub Store" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} alt='1'src={homeimg1}/>}>
          Marca de cosméticos hecho en Suecia fundada por Mika Liias. VEGANOS- SIN PARABENOS Online, Flagship store Plaza UMA San Pedro GG y Sual Beauty.
        </Card>
          <Card title="Tony Delfino" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} alt='1'src={homeimg3}/>}>
        Tony Delfino. Graphic Couture © / Desde 2008 / Centro /  Fabricados artesanalmente a mano.
         </Card>
          <Card title="FRESH STREET CULTURE" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} alt='1'src={homeimg4}/>}>
          Marca de Streetwear. Inspirada en el Hip Hop y la Cultura Urbana. Envios a todo México</Card>
          <Card title="Teddy Fresh Co." style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} alt='1'src={homeimg5}/>}>
           Teddy Fresh Official. Clothing, Sweatshirts, Hoodies, Jackets, T-Shirts, Socks, Accessories.
          </Card>
          <Card title="El búho naranja" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} alt='1'src={homeimg6}/>}>
          El búho naranja es una tienda iniciada en Morelia, Michoacán, nos dedicamos a la elaboración de camisas y chamarras personalizadas.          </Card>

      </div>
    )
  }
}
export default Tarjeta;
