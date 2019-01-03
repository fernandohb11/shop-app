import React, { Component } from 'react';

import './App.css';
import Routes from './Routes';
import {Link} from 'react-router-dom'
import 'antd/dist/antd.css';


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
        <br/>
<footer style={{   display:'flex', flexWrap:'wrap', justifyContent:'space-evenly' }}>
  

<div>

<h2>¿Necesitas ayuda? </h2>

<p>Mi cuenta</p>
<p>Preguntas frecuentes</p>
</div>

<div>

<h2>Sobre Kichink</h2>
                    <p class="footer-links"><a href="http://expert.kichink.com" title="Servicios Especiales" alt="Servicios Especiales">Servicios Especiales</a></p>
                    <p class="footer-links"><a href="#" data-toggle="modal" data-target="#modal-select-country" title="¿Cómo funciona?" alt="¿Cómo funciona?">¿Cómo funciona?</a></p>
                    <p class="footer-links"><a href="http://faqs.kichink.com/" title="¿Cómo comprar?" alt="¿Cómo comprar?">¿Cómo comprar?</a></p>
                    <p class="footer-links"><a href="http://blog.kichink.com/category/ecommerce-seguro" title="Seguridad" alt="Seguridad">Seguridad</a></p>                
</div>

<div>
<h2>¿Necesitas ayuda? </h2>
<p>Mi cuenta</p>
<p>Preguntas frecuentes</p>
</div>






    </footer>
      </div>
    );
  }
}

export default App;
