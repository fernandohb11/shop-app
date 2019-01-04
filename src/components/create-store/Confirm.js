import React, { Component } from 'react'
import {  List,  Form} from 'antd';
import axios from 'axios';
import {newStore} from '../../services/stores'
import Success from '../create-store/Success'






export class Confirm extends Component {

  state={
    sucess:false
  }
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.props)
    const values = this.props.values
    const emailShop= values.emailShop;
    const tituloShop = values.tituloShop;
    const descriptionShop =values.descriptionShop;
    const phoneShop= values.phoneShop;
    const store = { descriptionShop, tituloShop, emailShop, phoneShop}
  
    console.log(store)

    newStore(store)
    .then(r=>{
      console.log(r)
      this.setState({success:true})

    }).catch(e=>{
      console.log(e)
    })
  }


  
  render() {
 
    const { values : {tituloShop, descriptionShop, emailShop, phoneShop, categoriasShop}}= this.props
    return (
      <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
        <React.Fragment>
        
       <Form onSubmit={Success}> 
        <List.Item>
        Titulo: {tituloShop} 
        </List.Item>
        <br/>
        <List.Item>
        Descripción: {descriptionShop} 
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
       <button className="btn-rosa" onClick={this.handleFormSubmit} >Confirmar</button>
       
       </Form>
       
       
        </React.Fragment>
<br></br>
        {this.state.success && <Success/>}
    </div>
  </div>
    

    )
    
  }
}

export default Confirm
