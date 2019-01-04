import React, { Component} from 'react'
import StoreDetails from './StoreDetails'
import ItemDetails from './ItemDetails'
import Instructions from './Instructions'
import { Confirm } from './Confirm';
import Success from './Success';

class CreateStore extends Component {
  state = {
    step: 1,
    tituloShop:'',
    descriptionShop:'',
    tituloItem:'',
    descriptionItem:'',
    precioItem:'',
    categoriasItem:'',
    piezasItem:'',
    envioItem:'',
    categoriasItem:'',
    succes:false
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

handleSelectChange = value => {
  const { categoriasShop } =this.state;

  console.log(value)
  categoriasShop.push(value)
  this.setState({categoriasShop});
}

handleChange = input => e => {
  this.setState({[input]:e.target.value});
  // console.log(this.state)
}



  render() {

    //////
    const { step } = this.state;
    const {tituloShop, descriptionShop, emailShop, phoneShop, categoriasShop} = this.state;
    const values ={tituloShop, descriptionShop, emailShop, phoneShop, categoriasShop}

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
          handleSelectChange= {this.handleSelectChange}
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
      return ( <Confirm
        nextStep = {this.nextStep}
        prevStep = {this.prevStep}
        handleChange = {this.handleChange}
        values = {values}
        />)
      case 5:
      return <Success/>
      } 
  }
}

export default CreateStore
