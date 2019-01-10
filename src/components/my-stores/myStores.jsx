import React, { Component } from 'react'
import {Card, Row, Col} from 'antd';
import {Link} from 'react-router-dom'
import axios from 'axios';


export default class myStores extends Component {
  state= {
    user: {},
    store:{}
  }
  componentWillMount() {
   let {user} = this.state
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    if (!loggedUser) {this.props.history.push('/login')}
    else {
      user = loggedUser
      // this.setState(user)
      this.getStores(user._id)
    }
    
  }

  getStores = (user) => {
    axios.get('https://ironbutik.herokuapp.com/stores/stores/'+ user)
      .then(res => {
        const user = res.data
        this.setState({ user })
        console.log(user)
    })
  }

  getProducts = (store) => {
    axios.get('https://ironbutik.herokuapp.com/products/product/'+ store)
      .then(res => {
        const products = res.data
        this.setState({products})
    })
  }

  render() {
   
    const { user } = this.state
    return (
      <React.Fragment>
        <h2>Mis Tiendas</h2>
        <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px', width:'100%'}}>
       
        {user.stores ? user.stores.map(store => 
          
          <Link key={store._id} to={"/itemview/" + store._id}>
         <Row key={store._id} gutter={16}>
            <Col key={store._id} span={8}>
              <Card  style={{ width: '300px', marginTop: '30px' }} 
              key={store._id} title={store.tituloShop} bordered={false}>{store.descriptionShop} {store.emailShop} {store.phoneShop}
             
                </Card> 
         </Col>
       </Row>
       </Link> 
          // <Card key={store._id}title={store.tituloShop} style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={<img style={{maxHeight:'200px'}} alt='1' src={homeimg1}/>} >{store.descriptionShop} </Card>
        ) :
          
          
       
          <p>No hay elementos </p>} 
      </div></React.Fragment>
    )
  }
}
