import React from 'react'
import {Icon, Item, Form, Input,Button} from 'antd';

const SignupForm = ({signup, handleText}) => {
  return (
    <div>
    
      <Form method="POST" onSubmit={signup}>
      <Form.Item>
      <Input type="text" name="userName" onChange={handleText}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      </Form.Item>
      <Form.Item>
      <Input  type="email" name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"/>
      </Form.Item>
      <Form.Item>
      <Input  type="password" name="password"  onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
      </Form.Item>
      <Form.Item>
      <Input  type="text" name="name"  onChange={handleText} prefix={<Icon type="smile" style={{ color: 'rgba(0,0,0,.25)' }} />}  placeholder="Name"/>
      </Form.Item>
      <button type="submit">Registrate </button>
      </Form>
    </div>
  )
}

export default SignupForm
