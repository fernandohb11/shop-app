import React, { Component } from 'react'
import { Input, Form, Select} from 'antd';




const { TextArea } = Input;

export class StoreDetails extends Component {

  componentDidMount () {
    window.scroll(0, 0)
  }

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }

  render() {

    const { values } = this.props
    return (
      <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
      
        
        <React.Fragment>
        
       <form>
       <h2>Completa tus datos</h2>
        <Input 
        
        id='tituloShop' 
        
        placeholder=' Ingresa el Nombre de tu tienda' 
        defaultValue={values.tituloShop} 
        onChange={this.props.handleChange('tituloShop') } />
       
        <TextArea 
        autosize={{ minRows: 4, maxRows: 6 }}
        id='descriptionShop' 
        placeholder='Ingresa la Descripción de tu tienda' 
        defaultValue={values.descriptionShop} 
        onChange={this.props.handleChange('descriptionShop') } />
   

        
        <Input 
        id='emailShop' 
        placeholder='Ingresa el email de contacto' 
        defaultValue={values.emailShop} 
        onChange={this.props.handleChange('emailShop') } />

        <Input 
        id='phoneShop' 
        placeholder='Ingresa el teléfono de contacto' 
        defaultValue={values.phoneShop} 
        onChange={this.props.handleChange('phoneShop') } />
  
        
   
        <Form.Item onSubmit={this.props.handleChange('categoriasShop')}>
          <Select id='categoriasShop' 
          placeholder="Please select a country" 
          defaultValue={values.categoriasShop} 
          onChange={this.props.handleSelectChange }  >
                  <Select.Option value="china">China</Select.Option>
                  <Select.Option value="mexico">Mexico</Select.Option>
            <Select.Option value="usa">U.S.A</Select.Option>
          </Select>
        </Form.Item>

        
     

       <button className="btn-rosa" onClick={this.continue}>Continuar</button>
       </form>
       

        </React.Fragment>
    </div>

    </div>

    )
    
  }
}

export default StoreDetails
