import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button} from 'antd';
import '../../App.css';
import Card from '../card/Card.js';


const Home = () => (
  <div >
        <div className='bannerHome'>
          <div className='bannercito'> 
          </div>
        </div>
        
    <Link to='/Create-store'>
      <Button className="btn" style={{ marginTop:'15px', width:'150px', height:'50px'}}>Crear</Button>
    </Link>
    <div style={{background: "#ECECEC", marginTop:"40px"}}>
        <div className="banner-back">
            <h2 style={{textAlign: 'left', marginLeft:'35px', fontSize:'30px', fontFamily:'Futura', fontWeight:'lighter'}}>Tiendas Top</h2>
        </div>
       <div className="products">
        <div style={{display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px'}}>   
          <Card />
        </div>
    </div>
</div>



  </div>
 
  
  )
  

export default Home;




