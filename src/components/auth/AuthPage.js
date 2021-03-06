import React, { Component } from 'react'
import LoginForm from './LoginForm'
import SignupForm from './SignupForm'
import {signup, login} from '../../services/auth'

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

    login = (e) => {
        const { user } = this.state
        e.preventDefault()
        login(user)
        .then(r => {
            console.log(r)
            if(r.status === 500 || r.status === 404 )
            {
                console.log('Revisar Contraseña')
                alert('Contraseña Incorrecta') 
            }
            else{
                localStorage.setItem('loggedUser', JSON.stringify(r))
                this.props.history.push('/profile')
            }
          
         
        })
        .catch(e => console.log(e))
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
            <LoginForm
                login={this.login}
                handleText={this.handleText}/>
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
