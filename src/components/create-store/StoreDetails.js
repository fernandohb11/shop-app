import React, { Component } from 'react'
import { Input, Form, Select} from 'antd';





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
        <Input 
        id='tituloShop' 
        placeholder='Ingresa el Nombre de tu tienda' 
        defaultValue={values.tituloShop} 
        onChange={this.props.handleChange('tituloShop') } />
        <br/>
        <Input 
        id='descripcionShop' 
        placeholder='Ingresa la Descripción de tu tienda' 
        defaultValue={values.descripcionShop} 
        onChange={this.props.handleChange('descripcionShop') } />
        <br/>
        <Input 
        id='emailShop' 
        placeholder='Ingresa el email de contacto' 
        defaultValue={values.emailShop} 
        onChange={this.props.handleChange('emailShop') } />
        <br/>
        <Input 
        id='phoneShop' 
        placeholder='Ingresa el teléfono de contacto' 
        defaultValue={values.phoneShop} 
        onChange={this.props.handleChange('phoneShop') } />
        <br/>
        
   
        <Form.Item onSubmit={this.props.handleChange('categoriasShop')}>
          <Select id='categoriasShop' 
          placeholder="Please select a country" 
          defaultValue={values.categoriasShop} 
          onClick={this.props.handleChange('phoneShop') }  >
            <Select.Option value="china">China</Select.Option>
            <Select.Option value="usa">U.S.A</Select.Option>
          </Select>
        </Form.Item>

        
     

       <button onClick={this.continue}>Continuar</button>
       </form>
       

        </React.Fragment>
    </div>

    

    )
    
  }
}

export default StoreDetails
