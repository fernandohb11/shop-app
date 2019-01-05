import React, { Component } from 'react'
import { Input } from 'antd';





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
        <React.Fragment>
        
       <form>
       <h2>Agrega un producto</h2>

        <Input id='titulo' 
        placeholder='Ingresa el Titulo del artículo' 
        defaultValue={values.tituloItem} 
        onChange={this.props.handleChange('tituloItem') } />

        <br/>

        <Input 
        id='description' 
        placeholder='Ingresa la Descripción' 
        defaultValue={values.descriptionItem} 
        onChange={this.props.handleChange('descriptionItem') } />
        
        <br/>
        
         <Input id='precio'  
         placeholder='Ingresa el Precio de tu producto' 
         defaultValue={values.precioItem} 
         onChange={this.props.handleChange('precioItem') } />
        
        <br/>

        <Input id='categorias' 
        placeholder='Selecciona las Categorías' 
        defaultValue={values.categoriasItem} 
        onChange={this.props.handleChange('categoriasItem') } />
        
        <br/>

        <Input id='inventario' 
        placeholder='Ingresa el numero de piezas disponibles' 
        defaultValue={values.piezasItem} 
        onChange={this.props.handleChange('piezasItem') } />
        
        <br/>

        <Input id='envio' 
        placeholder='Selecciona el envio' 
        defaultValue={values.envioItem} 
        onChange={this.props.handleChange('envioItem') } />
        
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
