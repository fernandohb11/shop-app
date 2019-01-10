import React, { Component } from 'react'
import { Input } from 'antd';


export class NewItem extends Component {
  componentDidMount () {
    window.scroll(0, 0)
  }

  handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(this.props)
    

    // // values from items
    // const tituloItem=values.tituloItem;
    // const descriptionItem=values.descriptionItem;
    // const precioItem=values.precioItem;
    // const categoriasItem=values.categoriasItem;
    // const piezasItem=values.piezasItem;
    // const photoURL = values.photoURL;
    // const envioItem=values.envioItem;
    // const product = { tituloItem,descriptionItem, precioItem,categoriasItem, piezasItem,envioItem,photoURL  }

    // console.log(product)

   

    
  

  }
  
  back = e =>{
    e.preventDefault();
    this.props.prevStep();
  }


  
  render() {
   
    return (
      <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
        <React.Fragment>
        
       <form>
       <h2>Agrega un producto</h2>

        <Input id='titulo' 
                placeholder='Ingresa el Titulo del artículo' 
                
        
         />

        <br/>

        <Input 
        id='description' 
        placeholder='Ingresa la Descripción' 
        
         />
        
        <br/>


      {/* Subir imagenes de producto
        <ImageUploader
          handleImage={this.props.handleImage}
          handleSubmit={this.props.handleSubmit}
        
        />  */}

         <Input id='precio'  
         placeholder='Ingresa el Precio de tu producto' 
         
      />
        
        <br/>

        <Input id='categorias' 
        placeholder='Selecciona las Categorías' 
        
       />
        
        <br/>

        <Input id='inventario' 
                placeholder='Ingresa el numero de piezas disponibles' 
                
          
        />
        
        <br/>

        <Input id='envio' 
        placeholder='Selecciona el envio' 
    
       />
          <button className="btn-rosa"onClick={this.handleFormSubmit}>Continuar</button>
       
       </form>
       

        </React.Fragment>
    </div>

    </div>

    )
    
  }
}

