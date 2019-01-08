import React from 'react'
import { Icon, Form, Input } from 'antd';
import ProfilePicUploader from '../imageUploader/ProfilePicUploader'



const SignupForm = ({signup, handleText}) => {
  return (
    <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
      <div className="form-detail">
        <h2>Regístrate aquí</h2>
      <Form method="POST" onSubmit={signup}>
      <Form.Item>
      <Input type="text" name="userName" onChange={handleText}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Usuario" />
      </Form.Item>
      <Form.Item>
      <Input  type="email" name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"/>
          </Form.Item>
          <ProfilePicUploader  
            name='photoURL'
        
        /> 

      <Form.Item>
      <Input  type="password" name="password"  onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Contraseña"/>
      </Form.Item>
      <Form.Item>
      <Input  type="password2" name="password2"  onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Porfavor confirma tu contraseña"/>
      </Form.Item>
      <Form.Item>
      <Input  type="text" name="nombreUsuario"  onChange={handleText} prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Nombre"/>
      </Form.Item>
      <button className="btn-rosa"type="submit">Registrate </button>
      </Form></div>
    </div>
  )
}

export default SignupForm
