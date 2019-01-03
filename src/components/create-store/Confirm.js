import React, { Component } from 'react'
import { Input, List, Item, Form} from 'antd';





export class Confirm extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }



  
  render() {
 
    const { values : {tituloShop, descripcionShop, emailShop, phoneShop, categoriasShop}}= this.props
    return (
      <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
        <React.Fragment>
        
       <Form>
        <List.Item>
        Titulo: {tituloShop} 
        </List.Item>
        <br/>
        <List.Item>
        Descripción: {descripcionShop} 
        </List.Item>
        <br/>
        <List.Item>
        Email: {emailShop} 
        </List.Item>
        <br/>
        <List.Item>
        Teléfono: {phoneShop} 
        </List.Item>
        <br/>
        <List.Item>
        Categorias: {categoriasShop} 
        </List.Item>
        <br/>

        <br/>
        <button className="btn" style={{marginRight:"20px"}} onClick={this.back}>Regresar</button>
       <button className="btn-rosa" onClick={this.continue}>Continuar</button>
       
       </Form>
       

        </React.Fragment>
    </div>
  </div>
    

    )
    
  }
}

export default Confirm
