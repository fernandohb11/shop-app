import React, { Component } from 'react'
import { Card, Row, Col, Icon , Button} from 'antd';
import { Link } from 'react-router-dom';

import axios from 'axios';




export default class ItemView extends Component {
  state= {
    user: {},
    store: {},
    products: [],
    
  }
  componentWillMount() {
 
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    if (!loggedUser) {this.props.history.push('/login')}
    else {
      const user = loggedUser
      this.setState({user})
      this.getProducts(this.props.match.params.id)
    }
    
  }
  getProducts = (store) => {
    axios.get('https://ironbutik.herokuapp.com/products/product/'+ store)
      .then(res => {
        const products = res.data
        console.log(products)
        this.setState({ products })
        console.log(this.state)
    })
  }


  render() {
   
    const { products} = this.state
    return (
      <React.Fragment>
        <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px', width:'100%'}}>
        {products ? products.map(product => 
         <Row  key={products._id}gutter={16}>
            <Col  span={8}>
              <Card style={{ width: '300px', marginTop: '30px' }}
                key={product._id}
                title={product.tituloItem}
                
                bordered={false}>
                {product.photoURL !== "" ?
                  <img alt='foto del product' src={product.photoURL} style={{ width: '100%' }} /> : <Button shape="circle" loading />}
                <h4> {product.descriptionItem}</h4>
                <h5> $ {product.precioItem}.00 MXN</h5>
                <h5> {product.categoriasItem}</h5>
                <h5> Stock: {product.piezasItem}</h5>
                <h5> Envio: {product.envioItem}</h5>
                <Link to="/myStores">
                <button className="btn-stores"><Icon type="build" /> Mis Tiendas</button>
            </Link>
              </Card> 
              
         </Col>
       </Row>
     
          // <Card key={store._id}title={store.tituloShop} style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={<img style={{maxHeight:'200px'}} alt='1' src={homeimg1}/>} >{store.descriptionShop} </Card>
        ) :
          
          
       
          <p>No hay elementos </p>} 
      </div> </React.Fragment>
    )
  }
}

//   render() {
//     return (
//       <div>
       
//          <Card
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta
//       title="Europe Street beat"
//       description="www.instagram.com"
//     />
//   </Card>
 
//       </div>
//     )
//   }
// }
