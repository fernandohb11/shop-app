import React, { Component } from 'react';
import {Card} from 'antd';
import homeimg1 from '../../img/home1.jpg'

class Tarjeta extends Component {


  render() {
     return (
      <div>
         <Card title="Card title" style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={   <img style={{maxHeight:'200px'}} src={homeimg1}/>}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </Card>
      </div>
    )
  }
}
export default Tarjeta;
