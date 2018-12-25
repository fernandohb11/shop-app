import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';


import { Layout, Menu, } from 'antd';
const { Header,  } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav>
        <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
        <Menu.Item key="2"><Link to ="/login">Inicia Sesión</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/signup">Regístrate</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/profile">Perfil</Link></Menu.Item>
        
      </Menu>
     
    </Header>


          
          
          
        </nav>
        <Routes />
      </div>
    );
  }
}

export default App;
