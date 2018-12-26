import React, { Component } from 'react'
import { Input, Upload, Icon, message } from 'antd';





export class StoreDetails extends Component {
  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }



  
  render() {
    const { values } = this.props
    return (
      <div>
        <React.Fragment>
        
       <form>
        <Input id='titulo' placeholder='Ingresa el Nombre de tu tienda' defaultValue={values.titulo} onChange={this.props.handleChange('titulo') } />
        <br/>
        <Input id='descripcion' placeholder='Ingresa la Descripción' defaultValue={values.descripcion} onChange={this.props.handleChange('descripcion') } />
        <br/>
        <Input id='precio' placeholder='Ingresa el Precio' defaultValue={values.precio} onChange={this.props.handleChange('precio') } />
        <br/>
        <Input id='titulo' placeholder='Ingresa las Categorías' defaultValue={values.categorias} onChange={this.props.handleChange('categorias') } />
        <br/>
       <button onClick={this.continue}>Continuar</button>
       </form>
       

        </React.Fragment>
    </div>

    

    )
    
  }
}

export default StoreDetails
