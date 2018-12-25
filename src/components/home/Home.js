import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Carousel,Card} from 'antd';
import '../../App.css';


const Home = () => (
  <div>
    
 
   
    <Carousel autoplay>
    <div><h3>Hola que tal </h3></div>
    <div><h3>2</h3></div>
    <div><h3>3</h3></div>
    <div><h3>4</h3></div>
  </Carousel>


  <h1>¡Crea tu tienda en linea!</h1>
    <Link to='/Create-store'>
      Crear
    </Link>

    <div style={{ background: '#ECECEC', padding: '20px', display:'flex', flexWrap:'wrap' }}>
    
      
        <Card title="Card title" style={{width:'300px', margin:18}}  hoverable={true} cover={<img   alt="example" src="https://cdn.wegow.com/media/artists/christina-perri/christina-perri-1523011329.62.2560x1440.jpg" />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
      
      

      
        <Card title="Card title" style={{width:'300px', margin:18}}   hoverable={true} cover={<img   alt="example" src="http://www.pepsico.cl/images/librariesprovider40/default-album/vb3_montaje-productos-pepsico2e33c3aeef576d378be6ff5000e253d8.jpg?sfvrsn=1" />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
      
      
      
        <Card title="Card title" style={{width:'300px', margin:18}}   hoverable={true} cover={<img   alt="example" src="https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/10/18/productos.jpg?itok=tAU2UoXv&c=7d95ec0b6b2dfe437df7e2bba288b1e9" />}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card>
      

      
        <Card title="Card title" style={{width:'300px', margin:18}}   hoverable={true} cover={<img   alt="example" src="https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2017/10/18/productos.jpg?itok=tAU2UoXv&c=7d95ec0b6b2dfe437df7e2bba288b1e9" />}>
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.

        </Card>
      

     
    
  </div>

   
  </div>
  
  )

export default Home;