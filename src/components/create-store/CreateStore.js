import React, { Component } from 'react'
import StoreDetails from './StoreDetails'
import ItemDetails from './ItemDetails'

class CreateStore extends Component {
  state = {
    step: 1,
    titulo:'',
    descripcion:'',
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


  render() {
    const { step } = this.state;
    const {titulo, descripcion, precio, imagenes, categorias} =this.state;
    const values ={titulo, descripcion, precio, imagenes, categorias}

     switch (step) {
      case 1:
      return (
         <StoreDetails

          nextStep = {this.nextStep}
          handleChange = {this.handleChange}
          values = {values}
           />
      )
      case 2:
      return (
          <ItemDetails
              nextStep = {this.nextStep}
              prevStep = {this.prevStep}
              handleChange = {this.handleChange}
              values = {values}
              />
      )
      case 3:
      return <h1>Confirm</h1>

      case 3:
      return <h1>Success</h1>
      } 
  }
}

export default CreateStore