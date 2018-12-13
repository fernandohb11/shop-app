import React, { Component } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {signup} from '../../services/auth'

class AuthPage extends Component {

    state={
        user:{}
    }

    signup=(e)=>{
        const {user} = this.state
        e.preventDefault()
        signup(user)
            .then(r=>{
                console.log(r)
            }).catch(e=>{
                console.log(e)
            })
    }
    handleText=(e)=>{
        const {user} = this.state
        const field = e.target.name
        user[field] = e.target.value
        this.setState({user})
    }

  render() {
      const {pathname} = this.props.location
    return (
      <div>
        <div>
            {pathname==='/login'?
            <LoginForm/>
            :
            <SignupForm 
                signup={this.signup}
                handleText={this.handleText}/>    
            }
        </div>
      </div>
    )
  }
}

export default AuthPage
