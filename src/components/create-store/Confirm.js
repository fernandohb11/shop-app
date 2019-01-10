import React, { Component } from 'react'
import {Icon,  List,  Form} from 'antd';
import {newStore} from '../../services/stores'
import {newProduct} from '../../services/product'

import Success from './Success'






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
    const userId =JSON.parse(localStorage.getItem('loggedUser'))

    // values from store
    const values = this.props.values
    const emailShop= values.emailShop;
    const tituloShop = values.tituloShop;
    const descriptionShop =values.descriptionShop;
    const phoneShop= values.phoneShop;
    const store = { descriptionShop, tituloShop, emailShop, phoneShop, user:userId._id}
    // values from items
    const tituloItem=values.tituloItem;
    const descriptionItem=values.descriptionItem;
    const precioItem=values.precioItem;
    const categoriasItem=values.categoriasItem;
    const piezasItem=values.piezasItem;
    const photoURL = values.photoURL;
    const envioItem=values.envioItem;
    const product = { tituloItem,descriptionItem, precioItem,categoriasItem, piezasItem,envioItem,photoURL  }

    console.log(product)

    newStore(store)
    .then(resStore=>{
      console.log(resStore)
      //this.setState({ success: true })
      product['store'] = resStore._id
      console.log(product)
      newProduct(product)
      .then(resProduct=>{
        console.log(resProduct)
        this.setState({success:true})

      }).catch(e=>{
        console.log(e)
      })

    }).catch(e=>{
      console.log(e)
    })

    
  

  }
  


  
  render() {
 
    const { values : {tituloShop, descriptionShop, emailShop, phoneShop, categoriasShop, tituloItem,descriptionItem, precioItem,categoriasItem, piezasItem,envioItem,photoURL }}= this.props
    return (
      <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail-success">
          <React.Fragment>
          <div className="box-form">
          <Form  onSubmit={Success}> 
                <h2>Tienda</h2>
            <List.Item>
            Nombre de la Tienda: {tituloShop} 
            </List.Item>
            <br/>
            <List.Item>
            Descripción de la Tienda: {descriptionShop} 
            </List.Item>
            <br/>
            <List.Item>
            Email de contacto: {emailShop} 
            </List.Item>
            <br/>
            <List.Item>
            Teléfono de contato: {phoneShop} 
            </List.Item>
            <br/>
            <List.Item>
            Categorias: {categoriasShop} 
            </List.Item>
        </Form>
</div>
     <div className="box-form">
      <Form onSubmit={Success}> 

      <h2>Producto</h2>
      <List.Item>
      <img style={{width:'250px', height:'100px'}}  alt='foto de itek'src={photoURL}/> 
        </List.Item>
        <List.Item>
        Titulo del producto: {tituloItem} 
        </List.Item>
        <br/>
        <List.Item>
        Descripción del producto: {descriptionItem} 
        </List.Item>
        <br/>
        <List.Item>
        Precio: {precioItem} 
        </List.Item>
        <br/>
        <List.Item>
        Categorías: {categoriasItem} 
        </List.Item>
        <br/>
        <List.Item>
        Stock: {piezasItem} 
        </List.Item>
        <br/>
        <List.Item>
       Envio: {envioItem} 
        </List.Item>
        </Form>
</div>  
        <br/>
        <br/>
        </React.Fragment>
<br></br>
        {this.state.success && <Success/>}
        </div>
        <div style={{paddingBottom:"40px"}}>
        <button   className="btn" style={{marginRight:"20px"}} onClick={this.back}><Icon type="edit" /> Regresar</button>
       <button  className="btn-rosa" onClick={this.handleFormSubmit} > <Icon type="check" /> Confirmar</button>
       </div>
  </div>
    

    )
    
  }
}

export default Confirm
