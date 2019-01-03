import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';
import Footer from './components/home/Footer'

import { Layout, Menu, Input} from 'antd';
const { Header,  } = Layout;

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav >
        
        <Header>
          
      <Menu
     
        
        theme= 'light'
        mode="horizontal"
        defaultSelectedKeys={['1']}
        style={{ lineHeight: '64px'  }}
      >
        <Menu.Item key="1"><Link to="/">Inicio</Link></Menu.Item>
        <Menu.Item key="2"><Link to ="/login">Inicia Sesión</Link></Menu.Item>
        <Menu.Item key="3"><Link to="/signup">Regístrate</Link></Menu.Item>
        <Menu.Item key="4"><Link to="/profile">Perfil</Link></Menu.Item>
       
        <Menu.Item key="5">
        <Input defaultValue ='🔍 Busca productos o tiendas'></Input>
        </Menu.Item>
      </Menu>
     
    </Header>


          
          
          
        </nav>
        <Routes />

        <Footer />
      </div>
    );
  }
}

export default App;
