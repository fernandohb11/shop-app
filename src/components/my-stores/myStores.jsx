import React, { Component } from 'react'
import {Card, Row, Col, Button} from 'antd';
import homeimg1 from '../../img/home1.jpg'
import {Link} from 'react-router-dom'
import axios from 'axios';


export default class myStores extends Component {
  state= {
      user:{}
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
    axios.get('http://localhost:3000/stores/stores/'+ user)
      .then(res => {
        const user = res.data
        this.setState({user})
    })
  }

  render() {
    const { user } = this.state
    return (
    
        <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px', width:'100%'}}>
         
        {user.stores ? user.stores.map(store => 
          <Link to="/itemview">
         <Row gutter={16}>
            <Col span={8}>
              <Card style={{ width: '300px', marginTop: '30px' }} key={store._id} title={store.tituloShop} bordered={false}>{store.descriptionShop} {store.emailShop} {store.phoneShop}
                </Card> 
         </Col>
       </Row>
       </Link> 
          // <Card key={store._id}title={store.tituloShop} style={{width:'300px', marginTop:'20px'}}  hoverable={true} cover={<img style={{maxHeight:'200px'}} alt='1' src={homeimg1}/>} >{store.descriptionShop} </Card>
        ) :
          
          
       
          <p>No hay elementos </p>} 
      </div>
    )
  }
}
