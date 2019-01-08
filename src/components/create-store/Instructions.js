import React, { Component } from 'react'
import { Button } from 'antd';
import {Link, withRouter} from 'react-router-dom'
import LoginForm from '../auth/LoginForm';






export class Instructions extends Component {

  state={
    user: {},
  }
  
  componentWillMount() {
    let user = JSON.parse(localStorage.getItem('loggedUser'))
    if (!user) return this.props.history.push('/login')
  }

  continue = e =>{
    e.preventDefault();
    this.props.nextStep();
  }


  render() {
    const loggedUser = JSON.parse(localStorage.getItem('loggedUser'))
    // if (!loggedUser) this.props.history.push('/login')

    return (
    <React.Fragment>
     
       
        
      <div style={{marginBottom: "40px"}}>
        <div className='bannerStoreDetails'>
        
        <div className='banner'>
     
        </div>
        </div>
       <Button onClick={this.continue} className="btn-rosa"  block>Comenzar</Button>
    </div>

    
    </React.Fragment>
    )
    
  }
}


export default withRouter(Instructions)