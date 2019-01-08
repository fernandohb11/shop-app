 import React from 'react'
 import { Input, Form, Icon} from 'antd';
 import 'antd/dist/antd.css';
import '../../App.css';
import {Link} from 'react-router-dom'
 
const LoginForm = ({login, handleText}) => {
  return (

    <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
        <h2>Inicia sesion</h2>
      <Form method="POST" onSubmit={login}>
      <Form.Item>
      <Input type="text" name="userName" onChange={handleText}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item>
      <Input  type="email" name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"/>
      </Form.Item>
      <Form.Item>
      <Input  type="password" name="password"  onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña"/>
          </Form.Item>
          
     <Link to="/signup"> <button className="btn" style={{ marginRight: "20px" }} ><Icon type="edit" /> Regístrate</button></Link>
      <button className="btn-rosa"type="submit">Log in </button>
      </Form></div>
    </div>
  )
}

export default LoginForm
