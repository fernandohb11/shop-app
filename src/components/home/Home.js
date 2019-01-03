import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Button} from 'antd';
import '../../App.css';
import Card from '../card/Card.js';
import homeimg1 from '../../img/home1.jpg'
import homeimg2 from '../../img/home2.jpg'
import homeimg3 from '../../img/home3.jpg'
import homeimg4 from '../../img/home4.jpg'
import homeimg5 from '../../img/home5.jpg'
import homeimg6 from '../../img/home6.jpg'
import homeimg7 from '../../img/home7.jpg'
import homeimg8 from '../../img/home8.jpg'



const Home = () => (
  <div >
    

   

        <div className='bannerHome'>
        
        <div className='bannerhome'>
      
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




