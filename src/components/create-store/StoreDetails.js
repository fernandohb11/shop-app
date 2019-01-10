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
       <h2>Completa los datos de contacto para tu tienda</h2>
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
          placeholder="Porfavor selecciona una categoria" 
          defaultValue={values.categoriasShop} 
          onChange={this.props.handleSelectChange }  >
                  <Select.Option value="Alimentos y bebidas">Alimentos y bebidas</Select.Option>
                  <Select.Option value="Arte, diseño y accesorios">Arte, diseño y accesorios</Select.Option>
                  <Select.Option value="Moda y accesorios">Moda y accesorios</Select.Option>
                  <Select.Option value="Salud y belleza">Salud y belleza</Select.Option>
                  <Select.Option value="Deportes y Aire Libre">Deportes y Aire Libre</Select.Option>
                  <Select.Option value="Tecnología y gadgets">Tecnología y gadgets</Select.Option>
                  <Select.Option value=" Hogar">Hogar</Select.Option>
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
