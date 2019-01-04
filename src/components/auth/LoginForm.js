 import React from 'react'
 import { Input, Form, Icon} from 'antd';
 import 'antd/dist/antd.css';
 import '../../App.css';
 
const LoginForm = ({login, handleText}) => {
  return (

    <div style={{backgroundColor:"#f5f5f5", marginTop:"-47px"}}>
    <div className="form-detail">
      <Form method="POST" onSubmit={login}>
      <Form.Item>
      <Input type="text" name="userName" onChange={handleText}  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />
      </Form.Item>
      <Form.Item>
      <Input  type="email" name="email" onChange={handleText} prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Email"/>
      </Form.Item>
      <Form.Item>
      <Input  type="password" name="password"  onChange={handleText} prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password"/>
      </Form.Item>
      <button className="btn-rosa"type="submit">Log in </button>
      </Form></div>
    </div>





    // <div>
    //   Login
    //   <form method="POST" onSubmit={login}>
    //     <p>
    //         Email:
    //         <input type="email" name="email" onChange={handleText}/>
    //     </p>
    //     <p>
    //         Password:
    //         <input type="password" name="password" onChange={handleText}/>
    //     </p>
    //     <button type="submit">Log in </button>
    //   </form>
    // </div>
  )
}

export default LoginForm
