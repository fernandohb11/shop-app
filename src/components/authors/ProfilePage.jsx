import React, { Component } from 'react'
import { getProfile } from '../../services/auth'
import { Icon, Button} from 'antd';
import {Link} from 'react-router-dom'

 class ProfilePage extends Component {

    state={
        user: {},
    }

    componentWillMount(){
        getProfile()
            
            .then(user=>{
                this.setState({user})
            }).catch(error=>{
                
            })
    }

  render() {
      
      const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
      if (!loggedUser) this.props.history.push('/login')         
     

      
    return (
        <div style={{
            background: '#ECECEC', display: 'flex', flexWrap: 'wrap',
            justifyContent: 'space-evenly', paddingBottom: '40px'
        }}
        className='products'>
        <div> {this.img !== "" ?  
            <img  width="200" src="https://www.mycustomer.com/sites/all/modules/custom/sm_pp_user_profile/img/default-user.png" alt="user"/>
            : <Button shape="circle" loading />}
            {loggedUser ? <div>
                <h2>Bienvenid@ {loggedUser.userName}</h2>
                <p>Email: {loggedUser.email}</p>
                <p>Usuario: {loggedUser.userName}</p>
                <p>Nombre: {loggedUser.nombreUsuario}</p>
                </div>:''}
        <div className="btns-box">
                    <button className="btn" style={{ marginRight: "20px" }} ><Icon type="edit" />
                        Crear una Tienda</button>
            
                    <button className="btn-rosa" style={{ marginRight: "20px" }} ><Icon type="edit"/>
                        Crear un Item</button>
           
            <Link to="/myStores">
                <button className="btn-stores"><Icon type="build" /> Tienda y productos</button>
            </Link>
        </div>    
           
                  
                

         </div>
      </div>
    )
  }
}
export default ProfilePage