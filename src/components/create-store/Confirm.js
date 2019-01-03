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
      <div>
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
        <button onClick={this.back}>Regresar</button>
       <button onClick={this.continue}>Continuar</button>
       
       </Form>
       

        </React.Fragment>
    </div>

    

    )
    
  }
}

export default Confirm
