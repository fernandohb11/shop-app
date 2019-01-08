import React, { Component } from 'react'
import { getProfile } from '../../services/auth'
import {Card, Icon} from 'antd';
import {Link, withRouter} from 'react-router-dom'

 class ProfilePage extends Component {

    state={
        user: {},
    }

    componentWillMount(){
        getProfile()
            
            .then(user=>{
                this.setState({user})
            }).catch(error=>{
                console.log(error)
            })
    }

  render() {
      const {user} = this.state
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
      if (!loggedUser) this.props.history.push('/login')
      //if (loggedUser === null) this.props.history.push('/login')
         
      console.log(loggedUser)

      
    return (
     <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px'}} className='products'>
            <div style={{ width: '80px' }}>
                
            <button className="btn" style={{ marginRight: "20px" }} ><Icon type="edit" /> Crear una Tienda</button>
           <br></br><br></br>
                <button className="btn-rosa" style={{ marginRight: "20px" }} ><Icon type="edit" /> Crear un Item</button>
           
                <Link to="/myStores">
    <button>Tienda y productos</button>
    </Link>
            </div>    
           
            <Card 
    style={{ width: 300 }}
    cover={<img alt="example"  src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" /> }
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
            >             
                {loggedUser ? <div>
                    <h2>Bienvenido {loggedUser.userName}</h2>
                <p>Email: {loggedUser.email}</p>
                <p>Usuario: {loggedUser.userName}</p>
                <p>Nombre: {loggedUser.nombreUsuario}</p>
                </div>:''}
                
                
  </Card>
         
         
        
      </div>
    )
  }
}
export default ProfilePage