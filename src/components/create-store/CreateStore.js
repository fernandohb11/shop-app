import React, { Component} from 'react'
import StoreDetails from './StoreDetails'
import ItemDetails from './ItemDetails'
import Instructions from './Instructions'

class CreateStore extends Component {
  state = {
    step: 1,
    tituloShop:'',
    descripcionShop:'',
    precio:'',
    imagenes:[],
    categorias:[]
  }

//Siguiente paso
nextStep = () => {
  const { step } =this.state;
  this.setState ({
    step: step + 1
  })
}

//regresar al paso anterior
prevStep = () => {
  const { step } =this.state;
  this.setState ({
    step: step - 1
  })
}

// manejar el cambio de campos
handleChange = input => e => {
  this.setState({[input]:e.target.value});
}
handleChange(event) {
  this.setState({value: event.target.value});
}


  render() {

    //////
    const { step } = this.state;
    const {tituloShop, descripcionShop, emailShop, phoneShop, categoriasShop} = this.state;
    const values ={tituloShop, descripcionShop, emailShop, phoneShop, categoriasShop}

     switch (step) {
      case 1:
      return (
        
         <Instructions
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
           />
      )
      
      case 2:
      return (
        
         <StoreDetails
          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
           />
      )
      case 3:
      return (
          <ItemDetails
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              handleChange = {this.handleChange}
              values = {values}
              />
      )
      case 4:
      return <h1>Confirm</h1>

      case 5:
      return <h1>Success</h1>
      } 
  }
}

export default CreateStore