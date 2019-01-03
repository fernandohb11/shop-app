import React from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Card, Button} from 'antd';
import '../../App.css';
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
      <Button  type="danger" style={{ marginTop:'15px', width:'150px', height:'50px'}}>Crear</Button>
      </Link>


      <h2 style={{textAlign: 'left', marginLeft:'35px', fontSize:'30px', fontFamily:'Futura', fontWeight:'lighter'}}>Tiendas Top</h2>
        <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px'}}>
    
         

    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg1}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>

  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={  <img style={{maxHeight:'200px'}} src={homeimg2}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  
  
  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={ <img style={{maxHeight:'200px'}} src={homeimg3}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  

  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={ <img style={{maxHeight:'200px'}} src={homeimg4}/>}>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg5}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>

  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={  <img style={{maxHeight:'200px'}} src={homeimg6}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  
  
  
    <Card title="Card title" style={{width:'300px', marginTop:'20px'}}   hoverable={true} cover={ <img style={{maxHeight:'200px'}} src={homeimg7}/>}>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>
  

  
    <Card title="Card title" style={{width:'300px', marginTop:'20px', }}   hoverable={true} cover={ <img style={{maxHeight:'200px'}} src={homeimg8}/>}>
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
    </Card>

</div>



  </div>
 
  
  )
  

export default Home;




