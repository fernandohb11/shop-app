import React, { Component } from 'react'
import { Input, Button } from 'antd';





export class ItemDetails extends Component {
  componentDidMount () {
    window.scroll(0, 0)
  }
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }



  
  render() {
    const { values } = this.props
    return (
      <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
      <h2>Agrega un producto</h2>
        <React.Fragment>
        
       <form>
        <Input id='titulo' 
        placeholder='Ingresa el Titulo del artículo' 
        defaultValue={values.titulo} 
        onChange={this.props.handleChange('titulo') } />

        <br/>

        <Input 
        id='description' 
        placeholder='Ingresa la Descripción' 
        defaultValue={values.description} 
        onChange={this.props.handleChange('description') } />
        
        <br/>
        
         <Input id='precio' 
         placeholder='Ingresa el Precio' 
         defaultValue={values.precio} 
         onChange={this.props.handleChange('precio') } />
        
        <br/>

        <Input id='categorias' 
        placeholder='Selecciona las Categorías' 
        defaultValue={values.categorias} 
        onChange={this.props.handleChange('categorias') } />
        
        <br/>

        <Input id='inventario' 
        placeholder='Ingresa el numero de piezas disponibles' 
        defaultValue={values.inventario} 
        onChange={this.props.handleChange('categorias') } />
        
        <br/>

        <Input id='categorias' 
        placeholder='Selecciona el envio' 
        defaultValue={values.categorias} 
        onChange={this.props.handleChange('categorias') } />
        
        <br/>

        <Input id='categorias' 
        placeholder='Selecciona las Categorías' 
        defaultValue={values.categorias} 
        onChange={this.props.handleChange('categorias') } />
        
        <br/>
          <button className="btn" style={{marginRight:"20px"}} onClick={this.back}>Regresar</button>
          <button className="btn-rosa" onClick={this.continue}>Continuar</button>
       
       </form>
       

        </React.Fragment>
    </div>

    </div>

    )
    
  }
}

export default ItemDetails
