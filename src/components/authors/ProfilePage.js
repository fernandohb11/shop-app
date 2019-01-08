import React, { Component } from 'react'
import { getProfile } from '../../services/auth'
import {Card, Icon, Meta, Avatar} from 'antd';

 class ProfilePage extends Component {

    state={
        user:{}
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
      

      
    return (
     <div style={{ background: '#ECECEC',  display:'flex', flexWrap:'wrap', justifyContent:'space-evenly', paddingBottom:'40px'}} className='products'>
      
      
   
  <Card
    style={{ width: 300 }}
    cover={<img alt="example" src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png" />}
    actions={[<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]}
  >
    
  </Card>
            {user.name}
           
        {user.email}
      </div>
    )
  }
}
export default ProfilePage