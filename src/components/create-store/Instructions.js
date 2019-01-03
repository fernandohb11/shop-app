import React, { Component } from 'react'
import { Button } from 'antd';






export class Instructions extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  render() {


    return (
      <div style={{marginBottom: "40px"}}>
        <div className='bannerStoreDetails'>
        
        <div className='banner'>
     
        </div>
        </div>
       <Button onClick={this.continue} className="btn-rosa"  block>Comenzar</Button>
    </div>

    

    )
    
  }
}


export default Instructions