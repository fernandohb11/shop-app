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
         <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg1}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg2}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg3}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg4}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg5}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
          <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg6}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>

      </div>
    )
  }
}
export default Tarjeta;
