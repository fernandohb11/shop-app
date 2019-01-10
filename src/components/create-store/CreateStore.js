import React, { Component} from 'react'
import StoreDetails from './StoreDetails'
import ItemDetails from './ItemDetails'
import Instructions from './Instructions'
import { Confirm } from './Confirm';
import Success from './Success';
import {postPost, uploadFile} from '../../services/posts'


class CreateStore extends Component {
  state = {
    step: 1,
    categoriasShop:[],
    tituloShop:'',
    descriptionShop:'',
    tituloItem:'',
    descriptionItem:'',
    precioItem:'',
    piezasItem:'',
    envioItem:'',
    categoriasItem:'',
    success:false,
    posts:[],
    post:{},
    img:"",
    photoURL: {},
    nombreUsuario:''
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
  categoriasShop.push(value)
  this.setState({categoriasShop});
}
handleChange = input => e => {
  this.setState({ [input]: e.target.value });

 
}
//manejar imagen 
handleImage=(e)=>{
  console.log(e.target.files)
  let {photoURL} = this.state
  const {ImageUploader} = this.state
  const file = e.target.files[0]
  uploadFile(file)
    .then(link=>{
      photoURL = link
      this.setState({photoURL})
// modelo
      ImageUploader['photoURL'] = link
    })
}
handleSubmit=(e)=>{
  e.preventDefault()
  const {post, posts} = this.state
  postPost(post)
    .then(r=>{
      posts.push(r)
      this.setState({posts})
    }).catch(e=>console.log(e))
}
  render() {
    const { step } = this.state;
    const {tituloShop, descriptionShop, emailShop, phoneShop, categoriasShop,tituloItem,descriptionItem,precioItem,piezasItem,envioItem,categoriasItem,photoURL,nombreUsuario} = this.state;
    const values ={tituloShop, descriptionShop, emailShop, phoneShop, categoriasShop, tituloItem,descriptionItem,precioItem,piezasItem,envioItem,categoriasItem, photoURL, nombreUsuario}
    switch (step) {
      default:
        break;
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
              handleImage = {this.handleImage}
              handleSubmit = {this.handleSubmit}
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
