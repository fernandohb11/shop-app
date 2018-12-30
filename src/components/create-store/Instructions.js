import React, { Component } from 'react'
import { Button } from 'antd';






export class Instructions extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  render() {


    return (
      <div>
        <div className='bannerStoreDetails'>
        
        <div className='banner'>
     
        </div>
        </div>


      
        
     

    
       <Button onClick={this.continue} type="danger" block>Comenzar</Button>
    </div>

    

    )
    
  }
}


export default Instructions