import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Carousel,Card, Button} from 'antd';
import '../../App.css';
import homeimg1 from '../../img/home1.jpg'
import homeimg2 from '../../img/home2.jpg'
import homeimg3 from '../../img/home3.jpg'
import homeimg4 from '../../img/home4.jpg'


const Home = () => (
  <div>
    

   

        <div className='bannerHome'>
        
        <div className='bannerhome'>
      
        </div>
        </div>
        
    <Link to='/Create-store'>
      <Button  type="danger" style={{ marginBottom:'15px',marginTop:'15px', width:'150px', height:'50px'}}>Crear</Button>
      </Link>

        <div style={{ background: '#ECECEC', padding: '0px', display:'flex', flexWrap:'wrap', justifyContent:'space-evenly' }}>
    
      
    <Card title="Card title" style={{width:'270px', marginTop:'20px'}}  hoverable={true} cover={   <img src={homeimg1}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>

  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={  <img src={homeimg2}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  
  
  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={ <img src={homeimg3}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  

  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={ <img src={homeimg4}/>}>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  

</div>


   

<footer>
    
    

    





    </footer>
  </div>
 
  
  )
  

export default Home;




